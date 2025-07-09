# Tour Images Directory

This directory contains images for your tour gallery slideshow.

## How to Add Your Images:

1. **Copy your images** to this folder (`public/images/tours/`)
2. **Rename them** to match the filenames in `src/pages/TourDetails.js`:
   - `riviera-coast.jpg`
   - `historic-architecture.jpg`
   - `mediterranean-landscape.jpg`
   - `hilltop-village.jpg`
   - `crystal-waters.jpg`

## Supported Formats:

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Recommended Image Specifications:

- **Resolution**: 1200x800 pixels (or similar 3:2 aspect ratio)
- **File size**: Under 500KB for best performance
- **Quality**: High quality but web-optimized

## Adding More Images:

To add more images to the slideshow:

1. Add your new image files to this directory
2. Update the `slideshowImages` array in `src/pages/TourDetails.js`
3. Add a new object with `url` and `caption` properties

Example:

```javascript
{
  url: "/images/tours/your-new-image.jpg",
  caption: "Your image description",
}
```

## File Naming Tips:

- Use lowercase letters
- Replace spaces with hyphens (-)
- Avoid special characters
- Be descriptive but concise

Examples:

- `nice-promenade.jpg`
- `monaco-casino.jpg`
- `eze-village-view.jpg`
- `menton-old-town.jpg`
