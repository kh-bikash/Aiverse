# AIVerse - AI Learning Operating System

**AIVerse** is an interactive, visual-first learning platform that transforms how you master Artificial Intelligence. It combines interactive labs, real-time simulations, visualization tools, and an intuitive OS-like interface to make complex AI concepts accessible and engaging.

## 🌟 Key Features

### 📚 Interactive Learning Domains
- **Transformers**: Deep-dive into attention mechanisms, positional encoding, and transformer architecture
- **LLMs**: Explore large language models, tokenization, and prompt engineering
- **Computer Vision**: Master image processing, CNNs, and object detection
- **Machine Learning**: Learn supervised, unsupervised, and reinforcement learning
- **Neural Networks**: Visualize network architectures and training dynamics
- **AI Agents**: Understand autonomous agents and multi-agent systems
- **Retrieval-Augmented Generation (RAG)**: Learn context-aware AI systems
- **AI Safety**: Explore alignment, ethics, and responsible AI

### 🎮 Interactive Components
- **Visual Challenge System**: Gamified learning with interactive challenges
- **Attention Map Visualizer**: See how transformers focus on different tokens
- **3D Transformer Scene**: Interactive 3D visualization of transformer architecture
- **Neural Network Canvas**: Watch networks train in real-time
- **Data Visualization**: Explore datasets and embeddings interactively
- **Code Editor**: Monaco-based editor for AI experiments
- **AI Chat Tutor**: Conversational learning assistant
- **Voice Tutor**: Audio-based learning support

### 🛠️ Advanced Features
- **AI Model Mechanics**: Understand model internals and operations
- **Marketplace**: Discover and share community learning resources
- **Collaboration Hub**: Connect with other learners
- **Profile Analytics**: Track your learning progress
- **Recommendation Engine**: Get personalized learning paths
- **Command Center**: Central hub for all learning operations
- **AI Terminal**: Execute and explore AI concepts
- **Workspace System**: Organize your learning environment

### 🎨 Visualizations
- **Animated Matrix Grid**: Dynamic background animations
- **Gradient Flow Animation**: Smooth visual transitions
- **Floating Particles**: Interactive particle system
- **Token Flow Animation**: Visualize token processing
- **Neural Background**: AI-themed ambient visuals
- **Training Metrics**: Real-time performance tracking

## 📸 Gallery

### Interface Preview 1
![AIVerse Interface A1](./src/assets/a1.png)

### Interface Preview 2
![AIVerse Interface A2](./src/assets/a2.png)

### Interface Preview 3
![AIVerse Interface A3](./src/assets/a3.png)

## �🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   cd d:\Projects\i-meet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`
   - The application will auto-reload on file changes

### Available Scripts

- **`npm run dev`** - Start development server on `0.0.0.0:5173`
- **`npm run build`** - Create production build
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── app/                    # Main application entry
├── components/             # Reusable UI components
│   ├── ai/                # AI-specific components (tutors, models)
│   ├── animations/        # Motion and visual effects
│   ├── charts/            # Data visualization components
│   ├── dashboard/         # Dashboard layouts
│   ├── learning/          # Interactive learning modules
│   ├── os/                # OS-like interface components
│   ├── playground/        # Experimental/sandbox components
│   ├── shared/            # Shared components (header, footer)
│   ├── simulations/       # Physics and neural simulations
│   ├── ui/                # Basic UI components
│   └── visualizers/       # Advanced visualization engines
├── pages/                 # Route pages
├── features/              # Domain-specific logic
├── hooks/                 # Custom React hooks
├── services/              # Business logic services
├── store/                 # Zustand state management
├── utils/                 # Utility functions
├── styles/                # Global styles and Tailwind config
├── constants/             # Application constants
├── data/                  # Static data and configurations
└── routes/                # Route definitions
```

## 🎯 Core Technologies

### Frontend Framework
- **React 19.2.1** - UI library with latest features
- **React Router 7.15.0** - Client-side routing
- **Vite 7.2.7** - Fast build tool and dev server

### Visualization & 3D
- **Three.js 0.181.2** - 3D graphics engine
- **React Three Fiber 9.4.0** - React renderer for Three.js
- **React Three Drei 10.7.7** - Useful Three.js helpers
- **D3.js 7.9.0** - Data visualization
- **Recharts 3.5.1** - React charts library

### Code & Animation
- **Monaco Editor 0.53.0** - VS Code editor integration
- **Framer Motion 12.23.24** - Animation library
- **Lucide React 0.561.0** - Icon library
- **XYFlow 12.9.3** - Node-based visual editor

### State & Data
- **Zustand 5.0.9** - Lightweight state management

### Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformation tool

## 🎓 Learning Path

1. **Start**: Visit the landing page for an introduction
2. **Dashboard**: Access the main learning hub with featured domains
3. **Domain Labs**: Choose a domain and explore interactive lessons
4. **Challenges**: Test your knowledge with visual challenges
5. **Simulations**: Run real-time physics and neural simulations
6. **Settings**: Customize your learning experience
7. **Profile**: Track your progress and achievements

## 🔧 Configuration Files

- **`vite.config.js`** - Vite build configuration
- **`tailwind.config.js`** - Tailwind CSS theme
- **`postcss.config.js`** - PostCSS plugins
- **`eslint.config.js`** - Code quality rules
- **`vercel.json`** - Deployment configuration

## 🌐 Deployment

The application is configured for deployment on Vercel:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🤝 Features Breakdown

### Learning Components
- **AdaptiveQuiz**: Quiz system that adapts to learner level
- **Challenge Board**: Curated learning challenges
- **Domain Toolkit**: Tools for exploring specific domains
- **Interactive Learning Flow**: Step-by-step guided learning
- **Model Comparison Lab**: Compare different AI models
- **Learning Roadmap**: Visual skill progression path

### Simulation & Visualization
- **Neural Network Canvas**: Visualize and train neural networks
- **Training Metrics Chart**: Monitor model training in real-time
- **Attention Map**: See transformer attention weights
- **Transformer 3D Scene**: Interactive 3D model visualization
- **Embedding Explorer**: Explore high-dimensional embeddings
- **Dataset Visualizer**: Interactive dataset exploration

### OS-like Experience
- **OSLayout**: Main layout with sidebar and top bar
- **CommandPalette**: Quick access to commands and features
- **GlobalControls**: System-wide settings and controls
- **Sidebar**: Navigation and quick access
- **TopBar**: Status and quick actions
- **Marketplace**: Community resources and content
- **WorkspaceSystem**: Organize your learning workspace
- **AI Terminal**: Command-line AI interface

## 📊 Data & Configuration

### Routes & Navigation
All domain routes are configured in `src/data/osRoutes.js` and connected to their respective pages through `src/routes/routes.js`.

### AI Concepts
Domain-specific data and concepts are stored in `src/features/` by domain, allowing modular feature development.

### State Management
Global application state is managed through Zustand in `src/store/useAiverseStore.js`.

## 🎨 Design System

### Neural UI Theme
The application uses a custom "neural" theme with:
- Primary accent colors for interactive elements
- Dark surfaces for visual hierarchy
- Monospace fonts for technical content
- Neo-glassmorphism design patterns
- Smooth animations and transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Touch-friendly interactions
- Adaptive layouts

## 🚨 Troubleshooting

### Development Server Not Starting
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

### Missing Components or Features
- Verify all dependencies are installed: `npm install`
- Check that no files have import errors
- Review the console for error messages
- Restart the dev server: `npm run dev`

### Performance Issues
- Check browser developer tools for slow components
- Consider reducing animation complexity in settings
- Check for memory leaks in browser console
- Profile with React DevTools

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Three.js Documentation](https://threejs.org)
- [Zustand Guide](https://github.com/pmndrs/zustand)

## 📝 License

This project is part of the AIVerse learning platform.

## 🚀 Next Steps

1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server
3. Open browser to `http://localhost:5173`
4. Explore different domains and features
5. Check the browser console for any warnings
6. Customize themes and settings as needed

---

**Built with ❤️ for AI learners everywhere**
