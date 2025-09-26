import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// AI-specific utility types
export interface AIComponentProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export interface ConfidenceScore {
  value: number; // 0-1
  threshold?: number;
  label?: string;
}

export interface ReasoningStep {
  id: string;
  title: string;
  description: string;
  confidence?: number;
  duration?: number;
  evidence?: Evidence[];
}

export interface Evidence {
  id: string;
  source: string;
  content: string;
  credibility?: number;
  url?: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  status: 'active' | 'thinking' | 'offline';
}

export interface Message {
  id: string;
  content: string;
  agentId?: string;
  timestamp: Date;
  type: 'user' | 'assistant' | 'system';
}

// Utility functions for AI components
export function formatConfidence(score: number): string {
  return `${Math.round(score * 100)}%`;
}

export function getConfidenceColor(score: number, threshold = 0.7): string {
  if (score >= threshold) return 'text-green-600';
  if (score >= threshold - 0.2) return 'text-yellow-600';
  return 'text-red-600';
}

export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}
