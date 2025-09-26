import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const aiComponentVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        outline: "border-border bg-transparent",
        ghost: "border-transparent bg-transparent shadow-none",
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-4 text-base",
        lg: "p-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface AIComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof aiComponentVariants> {}

const AIComponent = React.forwardRef<HTMLDivElement, AIComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(aiComponentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
AIComponent.displayName = "AIComponent"

export { AIComponent, aiComponentVariants }