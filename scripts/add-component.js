#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.log('Usage: node scripts/add-component.js <component-name>');
  process.exit(1);
}

console.log(`Adding Fluix UI component: ${componentName}`);
console.log('This script will be enhanced in later tasks to fetch components from the registry.');

// For now, just create a placeholder
const componentDir = path.join('components', 'ai', 'transparency');
const componentFile = path.join(componentDir, `${componentName}.tsx`);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

const componentTemplate = `import * as React from "react";
import { cn } from "@/lib/utils";

export interface ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Props {
  className?: string;
}

export function ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}({ 
  className,
  ...props 
}: ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Props) {
  return (
    <div className={cn("", className)} {...props}>
      {/* Component implementation will be added in later tasks */}
      <p>Fluix UI Component: ${componentName}</p>
    </div>
  );
}
`;

fs.writeFileSync(componentFile, componentTemplate);
console.log(`Created component at: ${componentFile}`);