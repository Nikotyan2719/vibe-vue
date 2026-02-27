# Vibe Vue - Learning Platform for Web Developers

A modern, SSR-first learning platform built with Nuxt 4, Vue 3, and TypeScript. Features interactive lessons, code editor integration, and guest comment sections.

## 🚀 Features

- **SSR-First Architecture**: Server-side rendering for optimal performance and SEO
- **Interactive Lessons**: CSS, JavaScript, and HTML fundamentals with hands-on examples
- **Integrated Code Editor**: Try JavaScript code directly in lessons
- **Guest Comment Sections**: Community interaction under each lesson
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **TypeScript Strict**: Full type safety with no `any` usage
- **Modern Tooling**: ESLint, Vitest, Cypress, Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Nuxt 4.x (Vue 3 Composition API)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with responsive design
- **State Management**: Pinia (SSR-safe patterns)
- **Testing**: Vitest (unit), Cypress (e2e)
- **Code Quality**: ESLint, @nuxt/eslint
- **Utilities**: @bubblesortt/nuxt-es-toolkit

## 📁 Project Structure

```
vibe-vue/
├── app/                    # Main application directory
│   ├── components/        # Vue components (auto-imported)
│   ├── composables/       # Composables (auto-imported)
│   ├── stores/           # Pinia stores (SSR-safe)
│   ├── pages/            # Nuxt pages/routes
│   ├── layouts/          # Layout components
│   ├── assets/           # Static assets (CSS, images)
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   └── tests/            # Test files (unit & e2e)
├── public/               # Static files
└── specs/               # Project specifications and planning
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 10 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Nikotyan2719/vibe-vue.git
cd vibe-vue

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run typecheck

# Run unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:unit:watch

# Run e2e tests
npm run test:e2e

# Open Cypress test runner
npm run test:e2e:open
```

## 🧪 Testing

- **Unit Tests**: Vitest + @vue/test-utils for component testing
- **E2E Tests**: Cypress for browser testing
- **Coverage**: Run `npm run test:unit:coverage` for coverage report

Example test structure:
```
app/tests/unit/          # Unit tests
app/tests/e2e/           # End-to-end tests
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first responsive utilities
- **Custom Theme**: Extendable design system in `app/tailwind.config.js`

## 🔧 Configuration

- **Nuxt**: `nuxt.config.ts` - Main Nuxt configuration
- **TypeScript**: `tsconfig.json` - Strict TypeScript settings
- **ESLint**: `eslint.config.mjs` - Code quality rules
- **Tailwind**: `app/tailwind.config.js` - Design system
- **Vitest**: `vitest.config.ts` - Test configuration
- **Cypress**: `cypress.config.ts` - E2E test configuration

## 📦 Deployment

The application is optimized for deployment on platforms supporting Node.js SSR:

1. Build the application: `npm run build`
2. The production-ready files are in `.output/`
3. Deploy using any Node.js hosting (Vercel, Netlify, AWS, etc.)

## 🤝 Contributing

1. Follow the project constitution in `.specify/memory/constitution.md`
2. Use TypeScript strict mode (no `any`)
3. Write tests for new features
4. Ensure SSR-safe patterns in shared logic
5. Follow existing code conventions and patterns

## 📄 License

ISC License - see LICENSE file for details.

## 📞 Contact

Project Link: [https://github.com/Nikotyan2719/vibe-vue](https://github.com/Nikotyan2719/vibe-vue)