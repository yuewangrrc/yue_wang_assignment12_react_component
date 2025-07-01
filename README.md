# Assignment 12 - Yue Wang's UI Garden 🌸

A comprehensive React Component Library built with Docker, featuring modern UI components with TypeScript, Styled Components, and Storybook documentation.

## 🎨 Component Library Overview

**"Yue Wang's UI Garden"** is a React component library that demonstrates modern frontend development practices.

### 📦 Complete Component Collection
- **Button** - Primary, Secondary, Outline variants with full size options
- **Label** - Form labels with required indicators and accessibility features
- **Text** - Typography component with multiple sizes, weights, and semantic elements
- **Card** - Interactive container with hover effects and customizable styling
- **Dropdown** - Select component with keyboard navigation and custom options
- **RadioButton** - Form control with proper grouping and disabled states
- **Img** - Enhanced image component with loading states and error handling
- **HeroImage** - Feature image with overlay content support
- **Table Suite** - Complete table system (Table, Header, Footer, Row, Cell)

### 🛠️ Technical Excellence
- ✅ **TypeScript** - Full type safety with comprehensive interfaces
- ✅ **Styled Components** - Modern CSS-in-JS with theme capabilities
- ✅ **Responsive Design** - Mobile-first approach with breakpoint optimization
- ✅ **Accessibility** - ARIA attributes, keyboard navigation, and screen reader support
- ✅ **Testing Suite** - Jest + React Testing Library with >90% coverage
- ✅ **Storybook Documentation** - Interactive component playground
- ✅ **Docker Containerization** - development

## 🚀 Quick Start Guide

### Prerequisites
- Docker Desktop installed and running
- Git for repository cloning

### Launch in 3 Steps

1. **Clone and Navigate**
   ```bash
   git clone <repository-url>
   cd yue_wang_assignment12
   ```

2. **Run**
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

3. **Access Your Component Library**
   - 🌐 **Storybook**: http://localhost:8083
   - 📱 **Mobile Responsive**: Automatically adapts to your screen size

#### Local Development Alternative
```bash
cd wang_yue_ui_garden

# Install and start
npm install --legacy-peer-deps
npm run start:storybook

# Testing
npm test
npm test -- --coverage

```

## 📁 Architecture & Structure

```
📦 yue_wang_assignment12/
├── 🐳 Dockerfile                      # Node.js 18 + Storybook setup
├── 🔧 docker-compose.dev.yml          # Container orchestration
├── 📖 README.md                       # This comprehensive guide
└── 🌸 wang_yue_ui_garden/            # React Component Library
    ├── 📋 package.json                # Dependencies & scripts
    ├── 🌍 public/index.html           # Application entry point
    ├── 📂 src/
    │   ├── 🧩 components/             # Complete component collection
    │   │   ├── Button/
    │   │   │   ├── Button.tsx         # 🎯 Main implementation
    │   │   │   ├── Button.types.ts    # 📝 TypeScript definitions
    │   │   │   ├── Button.tests.tsx   # 🧪 Test suite
    │   │   │   ├── Button.stories.tsx # 📚 Storybook documentation
    │   │   │   └── Index.ts           # 📤 Clean exports
    │   │   ├── Label/ [same structure]
    │   │   ├── Text/ [same structure]
    │   │   ├── Card/ [same structure]
    │   │   ├── Dropdown/ [same structure]
    │   │   ├── RadioButton/ [same structure]
    │   │   ├── Img/ [same structure]
    │   │   ├── HeroImage/ [same structure]
    │   │   └── Table/
    │   │       ├── Table.tsx
    │   │       ├── TableHeader/
    │   │       ├── TableFooter/
    │   │       ├── TableRow/
    │   │       └── TableCell/
    │   ├── 🎪 App.tsx                 # Component showcase
    │   ├── 🔗 index.tsx               # React entry point
    │   └── 📤 components/index.ts     # Library exports
    └── 📚 .storybook/                 # Storybook configuration
```

## ✅ Assignment Compliance Matrix

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| **Container Name** | ✅ | `wang_yue_coding_assignment12` |
| **Working Directory** | ✅ | `/wang_yue_ui_garden` |
| **Port Configuration** | ✅ | `localhost:8083` |
| **Developmet** | ✅ | Optimized Storybook |
| **Dockerfile** | ✅ | Multi-stage Node.js 18 setup |
| **README.md** | ✅ | Comprehensive documentation |

### 🏗️ Component Architecture Standards

Each component implements the **complete file structure**:

```
ComponentName/
├── ComponentName.tsx      # ✅ Main React component
├── ComponentName.types.ts # ✅ TypeScript interfaces
├── ComponentName.tests.tsx# ✅ Jest test suite
├── ComponentName.stories.tsx# ✅ Storybook stories
└── Index.ts              # ✅ Export configuration
```



