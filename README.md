# Fluix UI

Advanced AI-first component registry for React applications built on top of shadcn/ui.
<img width="1497" height="609" alt="image" src="https://github.com/user-attachments/assets/0f071643-7f37-4109-9ddd-4ef5d33d9225" />


## Overview

Fluix UI provides unique AI-specific components that complement existing libraries like AI SDK UI and shadcn/ui. While AI SDK UI covers basic chat and completions, Fluix UI focuses on advanced AI interaction patterns, transparency features, enterprise governance, and specialized workflows that are currently missing from the ecosystem.

Built following the shadcn/ui pattern, Fluix UI components are:
- **Copy-paste friendly** - Own your code, no external dependencies
- **Customizable** - Built with Tailwind CSS and CSS variables
- **Accessible** - WCAG 2.1 AA compliant with proper ARIA support
- **TypeScript first** - Full type safety and IntelliSense support

## Quick Start

### Installation

```bash
# Install via CLI (coming soon)
npx fluix-ui@latest init

# Add your first component
npx fluix-ui add confidence-score
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component showcase.

## Project Structure

```
├── components/
│   ├── ai/                    # AI-specific components
│   │   ├── base/             # Base AI component utilities
│   │   ├── transparency/      # Trust and transparency components
│   │   ├── chat/             # Advanced chat interfaces
│   │   ├── input/            # AI input components
│   │   ├── workflow/         # Workflow automation components
│   │   ├── enterprise/       # Enterprise governance components
│   │   └── analytics/        # Performance monitoring components
│   └── ui/                   # Base shadcn/ui components
├── docs/                     # Documentation and guides
│   ├── components/           # Component documentation by category
│   ├── examples/             # Usage examples and patterns
│   ├── guides/              # Integration and best practices
│   ├── api/                 # API reference documentation
│   └── cli/                 # CLI documentation
├── lib/
│   └── utils.ts              # Utility functions including AI-specific helpers
├── scripts/                  # Development and build scripts
│   └── add-component.js      # Component scaffolding script
└── app/                      # Next.js app directory
```

## Top 10 Unique Components

### 🎯 **ConfidenceScore** - AI Trust Indicator
Visual confidence levels with thresholds and color coding - missing from existing AI UI libraries.

### 🧠 **ReasoningSteps** - AI Transparency  
Step-by-step AI reasoning display for explainable AI - unique transparency feature.

### 📚 **SourceAttribution** - Citation Management
AI response citations with source credibility indicators - critical for AI trust.

### ⚡ **PromptBuilder** - Visual Prompt Engineering
Drag-and-drop prompt construction with templates and variables - no existing equivalent.

### 👥 **MultiAgentChat** - Agent Coordination
Multi-agent conversations with role switching - extends beyond AI SDK's single-agent chat.

### 🤖 **ModelSelector** - AI Model Management  
Model selection with capability descriptions and parameter tuning - missing from ecosystem.

### 📋 **AuditTrail** - Enterprise Governance
AI operation audit logging for compliance - enterprise feature gap.

### 💰 **CostTracker** - Usage Monitoring
AI cost tracking with token usage and budget alerts - unique enterprise need.

### 🎤 **VoiceInterface** - Audio AI
Voice input/output with waveform visualization - missing from current AI UI.

### 🔄 **BatchProcessor** - Bulk Operations
Queue management for bulk AI operations - workflow automation gap.

## Why Fluix UI?

- **Complements existing libraries** - Works alongside AI SDK UI and shadcn/ui
- **Fills ecosystem gaps** - Focuses on missing transparency, governance, and advanced patterns
- **Enterprise-ready** - Includes compliance, cost tracking, and audit features
- **Unique value** - Components not available in other AI UI libraries

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Getting Started](docs/guides/getting-started.md)** - Installation and setup guide
- **[Component Documentation](docs/components/)** - Detailed component APIs and examples
- **[Usage Examples](docs/examples/)** - Real-world patterns and integrations
- **[CLI Reference](docs/cli/)** - Command-line tool documentation
- **[Integration Guides](docs/guides/)** - Framework and service integrations

## Development

This project is built with:
- [Next.js 15](https://nextjs.org) with App Router and Turbopack
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) as the base component system

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run docs:dev     # Start documentation development server
npm run docs:build   # Build documentation
npm run docs:preview # Preview built documentation
```

### Adding Components

Use the provided script to scaffold new components:

```bash
node scripts/add-component.js <component-name>
```

This will create a basic component template in the appropriate category directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Make your changes and add tests
4. Update documentation as needed
5. Commit your changes (`git commit -m 'feat: add amazing component'`)
6. Push to the branch (`git push origin feature/amazing-component`)
7. Open a Pull Request

## Roadmap

- [ ] Core component implementations
- [ ] CLI tool development
- [ ] Documentation website
- [ ] Component registry API
- [ ] Storybook integration
- [ ] Testing infrastructure
- [ ] Performance optimization
- [ ] Accessibility auditing

## License

MIT - see [LICENSE](LICENSE) for details.
