import { AIComponent } from "@/components/ai";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Fluix UI</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Unique AI components that complement AI SDK UI & shadcn/ui
        </p>
        <p className="text-lg text-muted-foreground/80 mb-8">
          Transparency • Enterprise Governance • Advanced AI Patterns
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            10 Unique Components
          </div>
          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Enterprise Ready
          </div>
          <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            Copy & Paste
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Top 10 Unique Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎯</span>
              <h3 className="font-semibold">ConfidenceScore</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Visual AI confidence indicators with thresholds
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🧠</span>
              <h3 className="font-semibold">ReasoningSteps</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Step-by-step AI reasoning display for transparency
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📚</span>
              <h3 className="font-semibold">SourceAttribution</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI response citations with source credibility
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">⚡</span>
              <h3 className="font-semibold">PromptBuilder</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Visual prompt construction with templates
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">👥</span>
              <h3 className="font-semibold">MultiAgentChat</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Multi-agent conversations with role switching
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🤖</span>
              <h3 className="font-semibold">ModelSelector</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI model selection with capability descriptions
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📋</span>
              <h3 className="font-semibold">AuditTrail</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI operation audit logging for compliance
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💰</span>
              <h3 className="font-semibold">CostTracker</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI usage cost monitoring with budget alerts
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎤</span>
              <h3 className="font-semibold">VoiceInterface</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Voice input/output with waveform visualization
            </p>
          </AIComponent>
          
          <AIComponent className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🔄</span>
              <h3 className="font-semibold">BatchProcessor</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Bulk AI operations with queue management
            </p>
          </AIComponent>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Why Fluix UI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-2 text-blue-700">🎯 Fills Real Gaps</h3>
              <p className="text-sm text-muted-foreground">
                Focuses on AI transparency, enterprise governance, and advanced patterns missing from existing libraries.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-green-700">🤝 Complements Ecosystem</h3>
              <p className="text-sm text-muted-foreground">
                Works alongside AI SDK UI and shadcn/ui rather than competing with them.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-purple-700">🏢 Enterprise Ready</h3>
              <p className="text-sm text-muted-foreground">
                Includes compliance, cost tracking, and audit features for production AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
        <p className="text-muted-foreground mb-4">
          Individual components are being implemented following our comprehensive design and task plan.
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <span className="px-3 py-1 bg-white rounded border">CLI Tool</span>
          <span className="px-3 py-1 bg-white rounded border">Documentation Site</span>
          <span className="px-3 py-1 bg-white rounded border">Component Registry</span>
        </div>
      </div>
    </main>
  );
}