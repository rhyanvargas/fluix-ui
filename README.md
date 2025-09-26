# Fluix UI

Advanced AI-first component registry for React applications built on top of shadcn/ui.

## Overview

Fluix UI provides a comprehensive set of AI-specific components that go beyond traditional UI libraries. Our components are designed specifically for AI applications, offering features like transparency indicators, confidence scores, reasoning displays, and advanced conversation interfaces.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── components/
│   ├── ai/                    # AI-specific components
│   │   ├── transparency/      # Trust and transparency components
│   │   ├── chat/             # Advanced chat interfaces
│   │   ├── input/            # AI input components
│   │   ├── workflow/         # Workflow automation components
│   │   ├── enterprise/       # Enterprise governance components
│   │   └── analytics/        # Performance monitoring components
│   └── ui/                   # Base shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions including AI-specific helpers
├── registry/                 # Component registry definitions
└── scripts/                  # Development scripts
```

## Component Categories

### Transparency Components
Build trust with confidence scores, reasoning steps, and source attribution.

### Advanced Chat
Multi-agent conversations, voice interfaces, and thread branching beyond basic chat.

### AI Input
Specialized input components for AI interactions with context awareness.

### Workflow
AI workflow and automation components for complex processes.

### Enterprise
Governance, monitoring, compliance, and cost tracking for enterprise AI.

### Analytics
Performance monitoring and analytics components for AI systems.

## Development

This project is built with:
- [Next.js 15](https://nextjs.org) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) as the base component system

## Adding Components

Use the provided script to scaffold new components:

```bash
node scripts/add-component.js <component-name>
```

## License

MIT
