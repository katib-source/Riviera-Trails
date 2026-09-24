import fs from "fs";
import path from "path";
import { updatedToursData } from "./newToursData";
import { FALLBACK_TOUR_IMAGE } from "../config/constants";

// Tour photos kept disappearing because they were hotlinked from file-sharing
// hosts (od.lk) and stock sites whose links expire. Every tour image must be
// a file committed under public/images/tours/.
const PUBLIC_DIR = path.join(__dirname, "..", "..", "public");

const allTours = Object.entries(updatedToursData.tours).flatMap(
  ([lang, tours]) => tours.map((tour) => ({ lang, tour }))
);

describe("tour images", () => {
  test.each(allTours.map(({ lang, tour }) => [lang, tour.slug, tour.image]))(
    "%s/%s is self-hosted and exists",
    (_lang, _slug, image) => {
      expect(image).toMatch(/^\/images\/tours\/[^/]+$/);
      expect(fs.existsSync(path.join(PUBLIC_DIR, image))).toBe(true);
    }
  );

  test("fallback image exists", () => {
    expect(fs.existsSync(path.join(PUBLIC_DIR, FALLBACK_TOUR_IMAGE))).toBe(true);
  });
});
