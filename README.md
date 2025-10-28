
# Harmony Generator

A modern web application for generating harmonies from MIDI/XML files with intelligent instrument selection and customization options.

![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6.3-646cff)

## ✨ Features

### 🎵 File Upload & Processing
- **Drag & Drop Interface** - Intuitive upload experience with visual feedback
- **File Validation** - Supports MIDI (.mid, .midi) and MusicXML (.xml, .musicxml) files up to 50MB
- **Animated Processing** - Multi-step validation with smooth transitions

### 🎹 Smart Instrument Selection
- **Interactive Cards** - Select exactly 3 instruments from a curated library
- **Customization Options**:
  - Musical Style (Classical, Jazz, Pop, Rock, Blues)
  - Difficulty Level (Beginner, Intermediate, Advanced, Expert)
- **Real-time Feedback** - Toast notifications and visual indicators

### 📊 Results Dashboard
- **Harmony Preview** - Expandable sheet music viewer
- **Project Management**:
  - Inline project name editing
  - Regenerate harmony with same settings
  - Start new project functionality
- **Metadata Display** - View selected instruments, style, and difficulty

### 🎨 Design & UX
- **Responsive Layout** - Optimized for desktop with mobile considerations
- **Expandable Sidebar** - Clean navigation with hover interactions
- **Custom Branding** - Musical note themed logo and warm color palette
- **Smooth Animations** - Polished transitions throughout the application

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/spatel54/Is492musicapp.git
   cd Is492musicapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
harmony-generator/
├── docs/                          # Documentation
│   ├── DESIGN_SYSTEM.md          # Design system guidelines
│   ├── EXPORT_GUIDE.md           # Export and deployment guide
│   ├── Attributions.md           # Asset credits
│   └── Guidelines.md             # Development guidelines
├── public/                        # Static assets
├── src/
│   ├── components/               # React components
│   │   ├── ui/                   # Shadcn/ui components
│   │   ├── home/                 # Home page components
│   │   ├── figma/                # Figma-specific components
│   │   └── *.tsx                 # Main screen components
│   ├── config/                   # Configuration files
│   ├── styles/                   # Global styles
│   ├── imports/                  # SVG and asset imports
│   ├── assets/                   # Component assets
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global CSS imports
├── package.json                  # Dependencies and scripts
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
└── README.md                     # This file
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: React hooks
- **Form Handling**: React Hook Form

## 📖 Documentation

- [Design System](docs/DESIGN_SYSTEM.md) - Typography, buttons, and design tokens
- [Export Guide](docs/EXPORT_GUIDE.md) - Deployment and production setup
- [Development Guidelines](docs/Guidelines.md) - Coding standards and best practices

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Key Dependencies

- **UI Components**: 20+ Radix UI components
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with validation
- **Themes**: next-themes for dark/light mode support
- **Animations**: CSS transitions and transforms

## 🎯 Usage

1. **Upload File** - Drag and drop or browse for MIDI/XML files
2. **Processing** - Watch automated validation steps
3. **Select Instruments** - Choose 3 instruments with style/difficulty preferences
4. **View Results** - Explore generated harmony with project management tools

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

MIT License - see [Attributions](docs/Attributions.md) for asset credits.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
1. Check the [Export Guide](docs/EXPORT_GUIDE.md) for common solutions
2. Review browser console for errors
3. Ensure Node.js version compatibility
4. Check that all dependencies are installed

## 🚀 Future Enhancements

- [ ] Real MIDI/XML file processing integration
- [ ] Interactive sheet music rendering
- [ ] Audio playback of generated harmonies
- [ ] User authentication and project saving
- [ ] Export harmonies as MIDI/PDF formats
- [ ] Mobile responsive design improvements
- [ ] Dark mode implementation

---

**Built with ❤️ using React, TypeScript, and modern web technologies**