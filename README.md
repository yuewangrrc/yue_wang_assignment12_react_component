# Yue Wang UI Garden

A React component library built with TypeScript and Storybook, containerized with Docker.

## Components

- **Button** - Multiple variants (Primary, Secondary, Outline)
- **Label** - Form labels with accessibility features
- **Text** - Typography component with different sizes
- **Card** - Interactive container component
- **Dropdown** - Select component with keyboard navigation
- **RadioButton** - Form radio input component
- **Img** - Enhanced image component
- **HeroImage** - Feature image component
- **Table Components** - Complete table system (Table, Header, Footer, Row, Cell)

## Quick Start

### Using Docker (Recommended)

1. Clone the repository
2. Run with Docker Compose:
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```
3. Open http://localhost:8083

### Local Development

```bash
cd wang_yue_ui_garden
npm install --legacy-peer-deps
npm run storybook
```

## Tech Stack

- React 18
- TypeScript
- Styled Components
- Storybook
- Docker
- Jest & React Testing Library

## Project Structure

```
yue_wang_assignment12/
├── Dockerfile.prod
├── docker-compose.prod.yml
├── .storybook/
└── wang_yue_ui_garden/
    ├── src/
    │   └── components/
    │       ├── Button/
    │       ├── Label/
    │       ├── Text/
    │       └── ...
    └── package.json
```

## Testing

```bash
npm test
npm test -- --coverage
```

## Build

```bash
npm run build:storybook
```