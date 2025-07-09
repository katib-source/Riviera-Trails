# Adding Local Images to Your Riviera Trails Website

## Quick Start Guide

Your website is now configured to use local images. Follow these simple steps:

### Step 1: Prepare Your Images

1. **Main tour image**: `nice-to-menton-main.jpg` (for the tour card)
2. **Slideshow images**:
   - `riviera-coast.jpg`
   - `historic-architecture.jpg`
   - `mediterranean-landscape.jpg`
   - `hilltop-village.jpg`
   - `crystal-waters.jpg`

### Step 2: Add Images to Your Project

1. Copy your images to: `public/images/tours/`
2. Make sure they have the exact filenames listed above
3. The images will automatically appear on your website

### Step 3: Image Specifications

**Recommended specs for best results:**

- **Main tour image**: 1470x980 pixels (3:2 ratio)
- **Slideshow images**: 1200x800 pixels (3:2 ratio)
- **Format**: JPG, PNG, or WebP
- **File size**: Under 500KB each for fast loading

## How It Works

- Images in `public/` folder are served directly by your website
- Paths like `/images/tours/image.jpg` automatically point to `public/images/tours/image.jpg`
- When you deploy your site, these images will be included automatically

## Adding More Images

To add more images to the slideshow:

1. Add your new image to `public/images/tours/`
2. Edit `src/pages/TourDetails.js`
3. Add a new entry to the `slideshowImages` array:

```javascript
{
  url: "/images/tours/your-new-image.jpg",
  caption: "Your description here",
}
```

## Alternative Options

### Option 1: External Image Services (Current Fallback)

- The website currently falls back to Unsplash images
- These are free stock photos but generic
- Good for testing but not personal

### Option 2: Cloud Storage (For Advanced Users)

- Upload to services like Cloudinary, AWS S3, etc.
- Update image URLs in the code
- Better for very large image collections

### Option 3: Import Images into Components

- Move images to `src/assets/images/`
- Import them in your components
- Bundled with your app (increases build size)

## File Structure

```
public/
  images/
    tours/
      nice-to-menton-main.jpg     ← Main tour card image
      riviera-coast.jpg           ← Slideshow image 1
      historic-architecture.jpg   ← Slideshow image 2
      mediterranean-landscape.jpg ← Slideshow image 3
      hilltop-village.jpg        ← Slideshow image 4
      crystal-waters.jpg         ← Slideshow image 5
      README.md                  ← This guide
```

## Testing Your Images

1. Add your images to the `public/images/tours/` folder
2. Start your development server: `npm start`
3. Navigate to your tour details page
4. Your images should appear in the slideshow!

## Troubleshooting

**Image not showing?**

- Check the filename exactly matches what's in the code
- Ensure the image is in `public/images/tours/` not `src/`
- Check browser developer tools for any 404 errors

**Image looks blurry?**

- Use higher resolution images (at least 1200px wide)
- Ensure good image quality before adding to project

**Page loads slowly?**

- Optimize/compress images before adding them
- Keep file sizes under 500KB when possible

## Ready to Deploy?

Once you've added your images:

1. All images in `public/` will be included in your build
2. Deploy normally with `npm run build`
3. Your images will be available on the live site!
