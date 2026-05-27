# RouteExit - Full Screen Responsive Image Website

A simple React website that displays a single full-screen responsive image based on the device viewport size.

## Features

- **Fully responsive** - Serves different images based on device viewport
- **Desktop view** (≥ 1024px width) - Uses `desktop.webp`
- **Tablet landscape** (768px-1023px width) - Uses `tablet.webp` (or `desktop.webp` if not available)
- **Mobile/Tablet portrait** (< 768px width or portrait orientation) - Uses `mobile.webp`
- **Smooth resizing** - Updates image when window is resized
- **Full-screen display** - Image covers entire viewport with `object-fit: cover`

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Place your WebP images in the `public/` folder:

- **desktop.webp** - Image for desktop view (recommended: 1920x1080 or larger)
- **tablet.webp** - Image for tablet landscape view (recommended: 768x1024 or similar)
- **mobile.webp** - Image for mobile/tablet portrait view (recommended: 375x667 or similar)

> **Note:** The placeholder images included are SVG files for demonstration purposes. Replace them with your actual WebP images.

### 3. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready to deploy.

## Responsive Image Logic

The component automatically selects the appropriate image based on:

```
- Width >= 1024px → desktop.webp (desktop)
- 768px <= Width < 1024px
  - Portrait (height > width) → mobile.webp (tablet portrait)
  - Landscape → tablet.webp (tablet landscape)
- Width < 768px → mobile.webp (mobile)
```

## Image Specifications

For best results, use these dimensions:

| Device | Image | Recommended Size |
|--------|-------|-----------------|
| Desktop | desktop.webp | 1920x1080 or larger |
| Tablet Landscape | tablet.webp | 1024x768 or 1366x768 |
| Mobile/Tablet Portrait | mobile.webp | 375x667 or 768x1024 |

## Deployment

The built site can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Any web server (AWS S3, Firebase, etc.)

## Browser Support

Works in all modern browsers supporting:
- ES6+ JavaScript
- CSS3 (object-fit: cover)
- WebP images

## Customization

To modify the breakpoints, edit `src/App.jsx` and adjust the pixel values in the `getImageForViewport()` function:

```javascript
if (width >= 1024) {
  // Adjust this value for desktop breakpoint
  return '/desktop.webp'
}
```

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling
