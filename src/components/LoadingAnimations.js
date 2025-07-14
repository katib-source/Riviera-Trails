import React from "react";

// Loading Spinner
export const LoadingSpinner = ({ size = "md", color = "blue" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colorClasses = {
    blue: "text-riviera-blue",
    green: "text-green-500",
    white: "text-white",
    gray: "text-gray-400",
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

// Skeleton Loader for Images
export const ImageSkeleton = ({
  className = "",
  aspectRatio = "aspect-video",
}) => {
  return (
    <div
      className={`${aspectRatio} ${className} bg-gray-200 rounded-lg animate-pulse`}
    >
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
    </div>
  );
};

// Skeleton Loader for Text
export const TextSkeleton = ({ lines = 3, className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded animate-pulse ${
            index === lines - 1 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
    </div>
  );
};

// Card Skeleton
export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <ImageSkeleton className="h-48" />
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <TextSkeleton lines={3} />
        <div className="mt-4 h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

// Page Loading Overlay
export const PageLoader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="mt-4 text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

// Button Loading State
export const LoadingButton = ({
  children,
  isLoading,
  loadingText = "Loading...",
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${props.className} flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {isLoading && <LoadingSpinner size="sm" color="white" />}
      {isLoading ? loadingText : children}
    </button>
  );
};

// Fade In Animation Component
export const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-fadeIn ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Slide In Animation Component
export const SlideIn = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => {
  const directionClasses = {
    up: "animate-slideInUp",
    down: "animate-slideInDown",
    left: "animate-slideInLeft",
    right: "animate-slideInRight",
  };

  return (
    <div
      className={`${directionClasses[direction]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
