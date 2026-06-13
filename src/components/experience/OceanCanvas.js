import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "../../lib/gsap";

/**
 * A procedural Côte d'Azur seascape rendered in a single full-screen GLSL
 * fragment shader: layered sky gradient, a bloom sun sinking toward the
 * horizon, and an animated sea with a golden sun-reflection column and
 * drifting specular sparkle. The whole scene parallaxes gently to the cursor.
 *
 * Built on plain three.js (no react-three-fiber) for full control and a small
 * runtime footprint. Caps DPR, pauses when the tab is hidden, and renders a
 * single static frame when the user prefers reduced motion.
 */
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec2  u_res;
  uniform float u_time;
  uniform vec2  u_mouse;   // -1..1
  varying vec2  vUv;

  // ── hash / value-noise / fbm ──────────────────────────────────
  float hash(vec2 p){
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.5;
    for(int i = 0; i < 5; i++){
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main(){
    // Aspect-correct coordinates, y up.
    vec2 uv = vUv;
    float aspect = u_res.x / max(u_res.y, 1.0);

    float horizon = 0.52 + u_mouse.y * 0.015;
    // Sun position slightly right of centre, drifting with the cursor.
    vec2 sun = vec2(0.62 + u_mouse.x * 0.05, horizon + 0.085);

    vec3 col;

    // ── SKY ───────────────────────────────────────────────────
    float sky = smoothstep(horizon, 1.0, uv.y);
    vec3 skyTop    = vec3(0.012, 0.050, 0.115); // midnight azure
    vec3 skyMid    = vec3(0.094, 0.310, 0.500); // azure
    vec3 skyHorizon= vec3(0.96, 0.70, 0.42);    // warm gold haze
    vec3 skyCol = mix(skyHorizon, skyMid, smoothstep(0.0, 0.55, sky));
    skyCol = mix(skyCol, skyTop, smoothstep(0.4, 1.0, sky));

    // soft drifting clouds high in the sky
    float clouds = fbm(vec2(uv.x * aspect * 2.2 + u_time * 0.02, uv.y * 3.0));
    clouds *= smoothstep(horizon + 0.06, 1.0, uv.y);
    skyCol += clouds * 0.05 * vec3(1.0, 0.85, 0.7);

    // ── SUN + bloom ──────────────────────────────────────────
    vec2 d = (uv - sun);
    d.x *= aspect;
    float dist = length(d);
    float disc  = smoothstep(0.085, 0.075, dist);
    float glow  = smoothstep(0.55, 0.0, dist);
    vec3 sunCol = vec3(1.0, 0.86, 0.62);
    skyCol += glow * glow * 0.65 * sunCol;
    skyCol = mix(skyCol, vec3(1.0, 0.93, 0.78), disc);

    // ── SEA ──────────────────────────────────────────────────
    // Perspective compression: rows near the horizon represent far water.
    float depth = (horizon - uv.y) / horizon;       // 0 at horizon → 1 at bottom
    float persp = 1.0 / (depth + 0.06);

    vec2 sea = vec2(uv.x * aspect, uv.y);
    float waves =
        fbm(vec2(sea.x * 3.0, depth * 14.0) + vec2(u_time * 0.05, u_time * 0.18)) * 0.6
      + fbm(vec2(sea.x * 8.0, depth * 26.0) - vec2(u_time * 0.12, u_time * 0.30)) * 0.4;

    vec3 seaDeep = vec3(0.015, 0.090, 0.180);
    vec3 seaTop  = vec3(0.055, 0.300, 0.430);
    vec3 seaCol  = mix(seaDeep, seaTop, smoothstep(0.0, 1.0, depth * 0.9 + waves * 0.25));

    // Golden sun-reflection column shimmering on the water.
    float colX = abs(uv.x - sun.x) * aspect;
    float column = smoothstep(0.22, 0.0, colX);
    float shimmer = fbm(vec2(uv.x * 26.0, depth * 40.0 + u_time * 0.9));
    float refl = column * (0.35 + 0.65 * shimmer) * smoothstep(0.0, 0.25, depth);
    seaCol += refl * vec3(1.0, 0.78, 0.45) * 0.9;

    // Sparkle highlights catching the light across the whole sea.
    float spark = pow(fbm(vec2(sea.x * 40.0, depth * 60.0 + u_time * 1.4)), 6.0);
    seaCol += spark * persp * 0.05 * vec3(1.0, 0.92, 0.75);

    // crisp horizon line glow
    float line = smoothstep(0.004, 0.0, abs(uv.y - horizon));
    seaCol += line * 0.5 * vec3(1.0, 0.8, 0.55);

    col = uv.y > horizon ? skyCol : seaCol;

    // ── Grade: gentle vignette + filmic-ish curve ────────────
    float vig = smoothstep(1.3, 0.25, length((uv - 0.5) * vec2(aspect, 1.0)));
    col *= mix(0.78, 1.06, vig);
    col = pow(col, vec3(0.92));

    gl_FragColor = vec4(col, 1.0);
  }
`;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const OceanCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    } catch (e) {
      // WebGL unavailable — the CSS gradient fallback behind the canvas remains.
      return;
    }

    const reduced = prefersReducedMotion();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      u_res: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0, 0) },
    };

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    const targetMouse = new THREE.Vector2(0, 0);
    const onMouse = (e) => {
      targetMouse.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_res.value.set(w, h);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let raf;
    let running = true;

    const render = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      // Ease cursor parallax for a fluid feel.
      uniforms.u_mouse.value.lerp(targetMouse, 0.04);
      renderer.render(scene, camera);
    };

    const loop = () => {
      if (running) render();
      raf = requestAnimationFrame(loop);
    };

    if (reduced) {
      render(); // single static frame
    } else {
      loop();
    }

    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduced) clock.getDelta();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      quad.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 h-full w-full"
      style={{ background: "linear-gradient(180deg,#04101f 0%,#0c2f4f 45%,#0a6fb5 70%,#e7b473 100%)" }}
      aria-hidden="true"
    />
  );
};

export default OceanCanvas;
