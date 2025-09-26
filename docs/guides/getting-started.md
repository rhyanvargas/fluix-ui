# Getting Started with Fluix UI

Fluix UI is an advanced AI component library that extends shadcn/ui with specialized components for AI applications.

## Installation

### Prerequisites

- Node.js 18+ 
- A Next.js project with shadcn/ui configured
- TypeScript (recommended)

### Quick Start

1. **Install via CLI** (recommended):
```bash
npx fluix-ui@latest init
```

2. **Add your first component**:
```bash
npx fluix-ui add confidence-score
```

3. **Use in your project**:
```tsx
import { ConfidenceScore } from "@/components/ai/transparency/confidence-score"

export function MyComponent() {
  return (
    <ConfidenceScore 
      score={0.85} 
      variant="bar" 
      showLabel 
    />
  )
}
```

## Manual Installation

If you prefer to copy components manually:

1. Copy the component files from the documentation
2. Install required dependencies
3. Update your `components.json` configuration

## Next Steps

- Browse the [component gallery](/components)
- Check out [usage examples](/examples)
- Read the [integration guides](/guides)