# Assignment 12 - Docker Setup

This project sets up a development environment for a React Component Library using Docker, featuring a comprehensive UI component collection built with TypeScript, styled-components, and comprehensive testing.

## 🎨 UI Component Library - "Yue Wang's UI Garden"

A beautiful and responsive React component library featuring:

### 📦 Components Included
- **Button** - Multiple variants (primary, secondary, outline), sizes, and custom colors
- **Label** - Form labels with required/optional indicators and multiple sizes  
- **Text** - Flexible text component with different sizes, weights, and alignments
- **Card** - Interactive cards with hover effects, custom styling, and click handlers

### 🛠️ Technical Features
- **TypeScript** - Full type safety and IntelliSense support
- **Styled Components** - CSS-in-JS styling with theme support
- **Responsive Design** - All components adapt to mobile, tablet, and desktop
- **Comprehensive Testing** - Each component has multiple test cases
- **Storybook Ready** - Stories configured for component documentation
- **Accessibility** - Proper ARIA attributes and keyboard navigation

## 🚀 How to Build and Run

### Prerequisites
- Docker and Docker Compose installed
- Git for cloning the repository

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yue_wang_assignment12
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

3. **Access the application**
   - Open your browser and navigate to: http://localhost:8083
   - Alternative: http://127.0.0.1:8083

### 🔧 Development Commands

#### Docker Commands
```bash
# Build and start the development server
docker-compose -f docker-compose.dev.yml up

# Run in detached mode (background)
docker-compose -f docker-compose.dev.yml up -d

# Stop the containers
docker-compose -f docker-compose.dev.yml down

# Rebuild containers (if Dockerfile changes)
docker-compose -f docker-compose.dev.yml up --build

# View container logs
docker-compose -f docker-compose.dev.yml logs -f
```

#### Local Development (without Docker)
```bash
cd wang_yue_ui_garden

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📁 Project Structure

```
yue_wang_assignment12/
├── Dockerfile                          # Docker configuration
├── docker-compose.dev.yml             # Docker Compose setup
├── README.md                           # This file
└── wang_yue_ui_garden/                # React Component Library
    ├── package.json                    # Dependencies and scripts
    ├── public/                         # Public assets
    ├── src/
    │   ├── components/                 # Component library
    │   │   ├── Button/
    │   │   │   ├── Button.tsx          # Component implementation
    │   │   │   ├── Button.types.tsx    # TypeScript interfaces
    │   │   │   ├── Button.test.tsx     # Test suite
    │   │   │   ├── Button.stories.tsx  # Storybook stories
    │   │   │   └── index.ts            # Component exports
    │   │   ├── Label/                  # Same structure for each component
    │   │   ├── Text/
    │   │   ├── Card/
    │   │   └── [Additional components...]
    │   ├── App.tsx                     # Main showcase application
    │   └── index.ts                    # Library exports
    └── .storybook/                     # Storybook configuration
```

## 🧪 Component Requirements Compliance

Each component follows the assignment requirements:

### ✅ File Structure
- ✅ `Component_name.tsx` - Main component implementation
- ✅ `Component_name.types.tsx` - TypeScript type definitions  
- ✅ `Component_name.test.tsx` - Comprehensive test suite
- ✅ `Component_name.stories.tsx` - Storybook documentation
- ✅ `indexComponent.ts` - Clean component exports

### ✅ Styling & Responsiveness
- ✅ **Styled Components** - All styling done with styled-components
- ✅ **Responsive Design** - Components adapt to mobile, tablet, desktop
- ✅ **Mobile-first approach** - Optimized for small screens

### ✅ Component States
- ✅ **Default State** - All components have proper default styling
- ✅ **Disabled State** - Visual changes (grayed out) and disabled cursor
- ✅ **Interactive States** - Hover effects and click handlers where appropriate

### ✅ Storybook Features
- ✅ **Controls** - Modify properties like text, background color, size
- ✅ **Multiple Stories** - Each component has various usage examples
- ✅ **Documentation** - Comprehensive component documentation

### ✅ Testing Coverage
- ✅ **Visibility Tests** - Verify components render and are visible
- ✅ **Disabled State Tests** - Verify background color changes when disabled
- ✅ **Interaction Tests** - Test click handlers and user interactions
- ✅ **Prop Tests** - Verify different props render correctly

## 🎯 Component Features

### Button Component
- **Variants**: Primary, Secondary, Outline
- **Sizes**: Small, Medium, Large  
- **States**: Default, Disabled, Hover
- **Customization**: Background color, text color
- **Responsive**: Full-width on mobile

### Label Component  
- **Variants**: Default, Required (*), Optional (optional)
- **Sizes**: Small, Medium, Large
- **States**: Default, Disabled
- **Accessibility**: Proper htmlFor associations

### Text Component
- **Sizes**: Small, Medium, Large, XLarge
- **Weights**: Light, Normal, Bold
- **Alignment**: Left, Center, Right, Justify
- **Elements**: Can render as p, span, div, h1-h6
- **Customization**: Text color, background color

### Card Component
- **Padding**: Small, Medium, Large
- **Features**: Shadow, Hover effects, Click handlers
- **States**: Default, Disabled, Interactive
- **Customization**: Background, border colors

## 🌐 Accessing the Application

Once the Docker container is running, you can access:

- **Main Application**: http://localhost:8083
  - Showcases all components with interactive examples
  - Demonstrates responsive design
  - Shows component combinations and real-world usage

- **Component Library**: All components are fully functional and documented

## 🚨 Troubleshooting

### Common Issues

1. **Port 8083 already in use**
   ```bash
   # Stop other containers using the port
   docker stop $(docker ps -q --filter "publish=8083")
   
   # Or change the port in docker-compose.dev.yml
   ```

2. **Container name conflict**
   ```bash
   # Remove existing container
   docker rm wang_yue_coding_assignment12
   ```

3. **Build cache issues**
   ```bash
   # Clear Docker cache and rebuild
   docker-compose -f docker-compose.dev.yml build --no-cache
   ```

4. **Node modules issues**
   ```bash
   # Rebuild the container to refresh dependencies
   docker-compose -f docker-compose.dev.yml up --build
   ```

## 📚 Future Enhancements

The component library is designed for easy extension:

- **Additional Components**: Table, Dropdown, Radio Button, Image, Hero Image
- **Storybook Integration**: Ready for full Storybook setup with newer Node.js
- **Theme System**: Expandable theming with styled-components
- **Testing**: Comprehensive test coverage ready for CI/CD
- **Documentation**: Auto-generated component documentation

## 👨‍💻 Developer Information

- **Student**: Yue Wang
- **Assignment**: 12 - Docker Setup & Component Library
- **Tech Stack**: React, TypeScript, Styled Components, Docker
- **Testing**: Jest, React Testing Library
- **Documentation**: Storybook (configured)

---

**Note**: This component library demonstrates modern React development practices with full Docker containerization, comprehensive testing, and production-ready component architecture.





