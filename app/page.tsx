import { AIComponent } from "@/components/ai";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">
              Building the future of AI interfaces
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Fluix UI
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-first component registry that complements AI SDK UI & shadcn/ui with unique transparency, governance, and workflow components.
          </p>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              10 Unique Components
            </div>
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
              Enterprise Ready
            </div>
            <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              Copy & Paste
            </div>
          </div>

          {/* Installation Commands */}
          <div className="max-w-lg mx-auto mb-16 space-y-3">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">$ npx fluix-ui@latest init</span>
                <button className="text-gray-500 hover:text-gray-300 text-xs">
                  copy
                </button>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">$ npx fluix-ui add confidence-score</span>
                <button className="text-gray-500 hover:text-gray-300 text-xs">
                  copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Transparency Components */}
          <div className="group">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-8 h-full hover:border-gray-700/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/30 rounded border border-blue-500/50"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Transparency</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Build trust with confidence scores, reasoning steps, and source attribution components.
                </p>
              </div>
              <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                <span>Explore components</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enterprise Governance */}
          <div className="group">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-8 h-full hover:border-gray-700/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500/30 rounded border border-emerald-500/50"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Governance</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Audit trails, cost tracking, and compliance monitoring for production AI applications.
                </p>
              </div>
              <div className="flex items-center text-emerald-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                <span>View enterprise features</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Advanced Patterns */}
          <div className="group">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-8 h-full hover:border-gray-700/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-purple-500/30 rounded border border-purple-500/50"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Patterns</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Multi-agent coordination, workflow automation, and specialized AI interaction patterns.
                </p>
              </div>
              <div className="flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                <span>Discover patterns</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Top 10 Components Showcase */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Top 10 Unique Components
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Components not available in AI SDK UI or shadcn/ui - filling real gaps in the AI development ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Transparency Components */}
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">ConfidenceScore</h3>
                  <p className="text-gray-400 text-sm">Visual confidence levels with thresholds and color coding - missing from existing AI UI libraries.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🧠</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">ReasoningSteps</h3>
                  <p className="text-gray-400 text-sm">Step-by-step AI reasoning display for explainable AI - unique transparency feature.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📚</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">SourceAttribution</h3>
                  <p className="text-gray-400 text-sm">AI response citations with source credibility indicators - critical for AI trust.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">PromptBuilder</h3>
                  <p className="text-gray-400 text-sm">Drag-and-drop prompt construction with templates and variables - no existing equivalent.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">MultiAgentChat</h3>
                  <p className="text-gray-400 text-sm">Multi-agent conversations with role switching - extends beyond AI SDK's single-agent chat.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">ModelSelector</h3>
                  <p className="text-gray-400 text-sm">Model selection with capability descriptions and parameter tuning - missing from ecosystem.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📋</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AuditTrail</h3>
                  <p className="text-gray-400 text-sm">AI operation audit logging for compliance - enterprise feature gap.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">CostTracker</h3>
                  <p className="text-gray-400 text-sm">AI cost tracking with token usage and budget alerts - unique enterprise need.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/20 border border-pink-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🎤</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">VoiceInterface</h3>
                  <p className="text-gray-400 text-sm">Voice input/output with waveform visualization - missing from current AI UI.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🔄</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">BatchProcessor</h3>
                  <p className="text-gray-400 text-sm">Queue management for bulk AI operations - workflow automation gap.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800/50 pt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Fluix UI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2 text-blue-400">🎯 Fills Real Gaps</h3>
                <p className="text-gray-400 text-sm">
                  Focuses on AI transparency, enterprise governance, and advanced patterns missing from existing libraries.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-emerald-400">🤝 Complements Ecosystem</h3>
                <p className="text-gray-400 text-sm">
                  Works alongside AI SDK UI and shadcn/ui rather than competing with them.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-400">🏢 Enterprise Ready</h3>
                <p className="text-gray-400 text-sm">
                  Includes compliance, cost tracking, and audit features for production AI applications.
                </p>
              </div>
            </div>
          </div>

          {/* Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="font-semibold mb-2">CLI Tool</h3>
              <p className="text-gray-400 text-sm">In development</p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="font-semibold mb-2">Documentation Site</h3>
              <p className="text-gray-400 text-sm">Coming soon</p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="font-semibold mb-2">Component Registry</h3>
              <p className="text-gray-400 text-sm">Planning phase</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4">Built with modern technologies</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300">Next.js 15</span>
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300">TypeScript</span>
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300">Tailwind CSS v4</span>
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300">shadcn/ui</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm pb-8">
            <p>Individual components are being implemented following our comprehensive design and task plan.</p>
            <p className="mt-2">Copy-paste friendly • No external dependencies • Full TypeScript support</p>
          </div>
        </div>
      </div>
    </main>
  );
}