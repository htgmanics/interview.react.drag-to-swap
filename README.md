This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Popsa.com - React Frontend test skeleton

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

# Photo Grid with Drag and Drop

A React component that creates a grid of photos with smooth drag and drop interactions, featuring animated transitions and visual feedback.

## Features

- Drag and drop photos to swap positions
- Smooth circle-to-rectangle expansion animation
- Visual feedback during drag operations
- Responsive grid layout
- Automatic fallback to static grid for single photo

## Technical Implementation

### Core Libraries
- `framer-motion`: Handles animations and transitions
- `@dnd-kit/core`: Powers the drag and drop functionality
- `styled-components`: Styles management

### Key Components

### PhotoGrid
The main component that determines whether to render a simple or draggable grid based on the number of images.
- Manages image state
- Renders SimplePhotoGrid for single images
- Renders DraggablePhotoGrid for multiple images

### DraggablePhotoGrid
Implements the drag-and-drop functionality for the photo grid.
- Uses dnd-kit for drag-and-drop operations
- Handles drag states and animations
- Manages image reordering
- Provides visual feedback during drag operations

### SimplePhotoGrid
A basic grid layout for displaying single images without drag functionality.
- Renders images in a grid layout
- Uses styled-components for styling

### PhotoGridLayout
The base grid layout component used by both simple and draggable grids.
- Defines the grid structure
- Handles responsive layout
- Manages spacing and styling

### SortableImage
Individual image component with drag-and-drop capabilities.
- Handles individual image drag states
- Manages hover and active states
- Provides visual feedback during interactions
- Implements preview overlay animations

### SortableImage.styles
Styled components for the sortable image items:
- SortableContainer: Wrapper for draggable images
- SortableImg: Image component with drag styles
- PreviewOverlay: Overlay for drag preview animations

### DragOverlayContent
Custom overlay component shown while dragging images.
- Displays a circular preview of the dragged image
- Handles animation transitions
- Provides visual feedback during drag operations

### DragOverlayContent.styles
Styled components for the drag overlay:
- DragOverlay: Circular container for dragged image preview

<sup>Popsa.com</sup>