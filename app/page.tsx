import { AIComponent } from "@/components/ai";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Fluix UI</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Advanced AI-first component registry for React applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <AIComponent className="text-center">
          <h3 className="text-lg font-semibold mb-2">Transparency Components</h3>
          <p className="text-sm text-muted-foreground">
            Build trust with confidence scores, reasoning steps, and source attribution
          </p>
        </AIComponent>
        
        <AIComponent className="text-center">
          <h3 className="text-lg font-semibold mb-2">Advanced Chat</h3>
          <p className="text-sm text-muted-foreground">
            Multi-agent conversations, voice interfaces, and thread branching
          </p>
        </AIComponent>
        
        <AIComponent className="text-center">
          <h3 className="text-lg font-semibold mb-2">AI Input</h3>
          <p className="text-sm text-muted-foreground">
            Specialized input components for AI interactions
          </p>
        </AIComponent>
        
        <AIComponent className="text-center">
          <h3 className="text-lg font-semibold mb-2">Workflow</h3>
          <p className="text-sm text-muted-foreground">
            AI workflow and automation components
          </p>
        </AIComponent>
        
        <AIComponent className="text-center">
          <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
          <p className="text-sm text-muted-foreground">
            Governance, monitoring, compliance, and cost tracking
          </p>
        </AIComponent>
        
        <AIComponent className="text-center">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            Performance monitoring and analytics components
          </p>
        </AIComponent>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground">
          Project foundation is set up. Individual components will be implemented in subsequent tasks.
        </p>
      </div>
    </main>
  );
}