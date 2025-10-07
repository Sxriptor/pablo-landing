import * as React from "react"
import { cn } from "@/lib/utils"

interface LuxuryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "outlined" | "filled"
  size?: "sm" | "md" | "lg"
}

const LuxuryCard = React.forwardRef<HTMLDivElement, LuxuryCardProps>(
  ({ className, variant = "elevated", size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-luxury-lg bg-card text-card-foreground transition-luxury",
          // Variant styles
          {
            "shadow-luxury-md hover:shadow-luxury-lg border-0": variant === "elevated",
            "border border-border shadow-none hover:border-foreground/20": variant === "outlined",
            "bg-secondary border-0 shadow-none": variant === "filled",
          },
          // Size styles
          {
            "p-4": size === "sm",
            "p-6": size === "md",
            "p-8": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
LuxuryCard.displayName = "LuxuryCard"

const LuxuryCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
))
LuxuryCardHeader.displayName = "LuxuryCardHeader"

const LuxuryCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-luxury-xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
LuxuryCardTitle.displayName = "LuxuryCardTitle"

const LuxuryCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-luxury-sm text-muted-foreground", className)}
    {...props}
  />
))
LuxuryCardDescription.displayName = "LuxuryCardDescription"

const LuxuryCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
LuxuryCardContent.displayName = "LuxuryCardContent"

const LuxuryCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-6", className)}
    {...props}
  />
))
LuxuryCardFooter.displayName = "LuxuryCardFooter"

export {
  LuxuryCard,
  LuxuryCardHeader,
  LuxuryCardFooter,
  LuxuryCardTitle,
  LuxuryCardDescription,
  LuxuryCardContent,
}