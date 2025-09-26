# Fluix UI

Advanced AI-first component registry for React applications built on top of shadcn/ui.

## Overview

Fluix UI provides a comprehensive set of AI-specific components that go beyond traditional UI libraries. Our components are designed specifically for AI applications, offering features like transparency indicators, confidence scores, reasoning displays, and advanced conversation interfaces.

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

## Component Categories

### 🔍 Transparency Components
Build trust with confidence scores, reasoning steps, and source attribution.
- `ConfidenceScore` - Visual confidence indicators with thresholds
- `ReasoningSteps` - Step-by-step AI reasoning display
- `SourceAttribution` - AI response source citations
- `BiasIndicator` - Bias detection and mitigation alerts

### 💬 Advanced Chat
Multi-agent conversations, voice interfaces, and thread branching beyond basic chat.
- `MultiAgentChat` - Multi-agent conversation management
- `VoiceInterface` - Voice input/output with visualization
- `ThreadBranching` - Conversation thread management
- `ConversationMemory` - Context and memory visualization

### ⌨️ AI Input
Specialized input components for AI interactions with context awareness.
- `PromptBuilder` - Visual prompt construction with templates
- `MultimodalUpload` - AI-aware file upload and processing
- `ModelSelector` - AI model selection and configuration
- `ParameterTuner` - AI parameter adjustment controls

### 🔄 Workflow
AI workflow and automation components for complex processes.
- `PipelineVisualizer` - AI workflow visualization
- `BatchProcessor` - Bulk operation management
- `AgentOrchestrator` - Multi-agent coordination
- `DecisionTree` - Conditional logic builders

### 🏢 Enterprise
Governance, monitoring, compliance, and cost tracking for enterprise AI.
- `AuditTrail` - AI operation audit logging
- `CostTracker` - AI usage cost monitoring
- `ComplianceMonitor` - Regulatory compliance tracking
- `SafetyFilter` - Content safety and bias detection

### 📊 Analytics
Performance monitoring and analytics components for AI systems.
- `PerformanceMetrics` - AI performance dashboards
- `ConversationAnalytics` - Conversation insights and trends
- `FeedbackCollector` - User feedback aggregation
- `DebugInspector` - AI request/response debugging

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
