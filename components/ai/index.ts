// Base components
export { AIComponent } from "./base/ai-component";

// Utility types and functions
export type {
  AIComponentProps,
  ConfidenceScore,
  ReasoningStep,
  Evidence,
  Agent,
  Message,
} from "@/lib/utils";

export {
  cn,
  formatConfidence,
  getConfidenceColor,
  formatDuration,
} from "@/lib/utils";

// Component categories will be exported here as they are implemented
// export * from "./transparency";
// export * from "./chat";
// export * from "./input";
// export * from "./workflow";
// export * from "./enterprise";
// export * from "./analytics";