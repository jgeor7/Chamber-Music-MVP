# Harmony Generator

A modern web application for generating harmonies from MIDI/XML files with intelligent instrument selection and customization options.

![Harmony Generator](https://img.shields.io/badge/React-18.3-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6)

## Features

### 🎵 File Upload
- **Drag & Drop Interface** - Intuitive upload experience with visual feedback
- **File Validation** - Supports MIDI (.mid, .midi) and MusicXML (.xml, .musicxml) files
- **Size Limit** - Maximum file size of 50MB
- **Error Handling** - Clear error messages for invalid files

### ⚡ Processing Pipeline
- **Animated Validation** - Multi-step processing with visual progress indicators
- **Smooth Transitions** - Seamless flow between application states

### 🎹 Instrument Selection
- **Interactive Cards** - Select exactly 3 instruments from a curated library
- **Toast Notifications** - Real-time feedback when selection is complete
- **Customization Options**:
  - Musical Style (Classical, Jazz, Pop, etc.)
  - Difficulty Level (Beginner, Intermediate, Advanced)

### 📊 Results Dashboard
- **Harmony Preview** - Expandable sheet music viewer
- **Project Management**:
  - Inline project name editing
  - Regenerate harmony with same settings
  - Start new project
- **Tagged Metadata** - View selected instruments, style, and difficulty

### 🎨 Design Features
- **Expandable Sidebar** - Clean navigation with hover interactions
- **Custom Logo** - Musical note themed branding
- **Responsive Layout** - Optimized for desktop viewing
- **Smooth Animations** - Polished user experience throughout

## Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library
- **Motion** - Smooth animations and transitions

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup

1. **Clone or extract the project**
   ```bash
   cd harmony-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Replace Figma Assets** (Important!)
   
   The project uses Figma asset imports that need to be replaced with actual images:
   
   - Navigate to `/imports/` directory
   - Replace `figma:asset/*` imports with real image URLs or local files
   - Update the import statements in the following files:
     - `InstrumentSelectionScreen.tsx` (instrument images)
   
   Example replacement:
   ```tsx
   // Before
   import imgRectangle from "figma:asset/7eae5bd45ddc37064c66617f933c5534a0a11ca5.png";
   
   // After
   import imgRectangle from "./assets/violin.png";
   // or use a URL
   const imgRectangle = "https://your-cdn.com/violin.png";
   ```

4. **Add Font Files** (Optional)
   
   The app uses custom fonts:
   - **Figtree** (Bold, SemiBold, Regular)
   - **SF Pro Rounded** (Regular)
   
   Add font files to `/public/fonts/` and update `globals.css` with @font-face declarations.

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
harmony-generator/
├── App.tsx                          # Main application component
├── main.tsx                         # React entry point
├── index.html                       # HTML template
├── components/
│   ├── Logo.tsx                     # App logo component
│   ├── Sidebar.tsx                  # Expandable navigation
│   ├── ProcessingScreen.tsx         # File validation screen
│   ├── InstrumentSelectionScreen.tsx # Instrument picker
│   ├── ResultsScreen.tsx            # Final results view
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image helper component
│   └── ui/                          # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
├── imports/                         # SVG paths from Figma
│   ├── svg-*.ts                     # Generated SVG definitions
│   └── Frame*.tsx                   # Frame components
├── styles/
│   └── globals.css                  # Tailwind v4 configuration
└── public/                          # Static assets (create this)
    ├── fonts/                       # Font files
    └── images/                      # Image assets
```

## Usage

### 1. Upload File
- Drag and drop a MIDI or XML file onto the upload area
- Or click to browse and select a file
- File is validated for type and size

### 2. Processing
- Watch as the file goes through validation steps
- Automatic transition to instrument selection

### 3. Select Instruments
- Choose exactly 3 instruments by clicking on cards
- Optionally set musical style and difficulty
- Toast notification appears when 3 instruments are selected
- Click "Continue" to generate harmony

### 4. View Results
- Click the project name to rename it inline
- Expand the sheet music preview for fullscreen view
- Regenerate with same settings or start a new project

## Customization

### Color Scheme
The app uses a warm, musical color palette. Modify in `styles/globals.css`:
- **Primary Red**: `#E76D57`
- **Cream Background**: `#F8F3EB`
- **Dark Brown**: `#813D31`
- **Light Gray**: `#E5DDD5`

### Instruments
Add or modify instruments in `InstrumentSelectionScreen.tsx`:
```tsx
const instruments = [
  { image: imgViolin, name: 'Violin' },
  { image: imgSaxophone, name: 'Saxophone' },
  // Add more...
];
```

### Musical Styles & Difficulty
Update dropdown options in the same file:
```tsx
const styles = ['Classical', 'Jazz', 'Pop', 'Rock', 'Blues'];
const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Known Limitations

1. **Figma Assets**: Must be replaced with real images before deployment
2. **File Processing**: Currently simulated - integrate with actual MIDI/XML processing library
3. **Sheet Music Preview**: Placeholder content - integrate with music notation library
4. **Backend**: Frontend-only app - add server for file processing and storage

## Future Enhancements

- [ ] Real MIDI/XML file processing
- [ ] Interactive sheet music rendering
- [ ] Audio playback of generated harmonies
- [ ] User authentication and project saving
- [ ] Export harmonies as MIDI/PDF
- [ ] Mobile responsive design
- [ ] Dark mode support

## License

MIT License - feel free to use for personal or commercial projects

## Credits

- Icons by [Lucide](https://lucide.dev)
- UI Components by [Shadcn/ui](https://ui.shadcn.com)
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)

---

**Note**: This project was created with Figma Make and requires manual asset replacement before deployment. See Installation section for details.
