import * as React from "react"
import { cn } from "@/lib/utils"

interface LuxuryHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: "display" | "heading" | "subheading"
}

const LuxuryHeading = React.forwardRef<HTMLHeadingElement, LuxuryHeadingProps>(
  ({ className, level = 1, variant = "heading", children, ...props }, ref) => {
    const Component = `h${level}` as keyof JSX.IntrinsicElements
    
    const getVariantClasses = () => {
      if (variant === "display") {
        return {
          1: "text-luxury-6xl font-bold tracking-tight",
          2: "text-luxury-5xl font-bold tracking-tight",
          3: "text-luxury-4xl font-bold tracking-tight",
          4: "text-luxury-3xl font-semibold tracking-tight",
          5: "text-luxury-2xl font-semibold tracking-tight",
          6: "text-luxury-xl font-semibold tracking-tight",
        }[level]
      }
      
      if (variant === "subheading") {
        return {
          1: "text-luxury-2xl font-medium tracking-tight text-muted-foreground",
          2: "text-luxury-xl font-medium tracking-tight text-muted-foreground",
          3: "text-luxury-lg font-medium tracking-tight text-muted-foreground",
          4: "text-luxury-base font-medium tracking-tight text-muted-foreground",
          5: "text-luxury-sm font-medium tracking-tight text-muted-foreground",
          6: "text-luxury-xs font-medium tracking-tight text-muted-foreground",
        }[level]
      }
      
      // Default heading variant
      return {
        1: "text-luxury-4xl font-bold tracking-tight",
        2: "text-luxury-3xl font-semibold tracking-tight",
        3: "text-luxury-2xl font-semibold tracking-tight",
        4: "text-luxury-xl font-semibold tracking-tight",
        5: "text-luxury-lg font-medium tracking-tight",
        6: "text-luxury-base font-medium tracking-tight",
      }[level]
    }

    return React.createElement(
      Component,
      {
        ref,
        className: cn(getVariantClasses(), className),
        ...props,
      },
      children
    )
  }
)
LuxuryHeading.displayName = "LuxuryHeading"

interface LuxuryTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "caption" | "small" | "large"
  muted?: boolean
}

const LuxuryText = React.forwardRef<HTMLParagraphElement, LuxuryTextProps>(
  ({ className, variant = "body", muted = false, ...props }, ref) => {
    const variantClasses = {
      large: "text-luxury-lg",
      body: "text-luxury-base",
      caption: "text-luxury-sm",
      small: "text-luxury-xs",
    }[variant]

    return (
      <p
        ref={ref}
        className={cn(
          variantClasses,
          "leading-relaxed",
          muted && "text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
LuxuryText.displayName = "LuxuryText"

interface LuxuryLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

const LuxuryLabel = React.forwardRef<HTMLLabelElement, LuxuryLabelProps>(
  ({ className, required = false, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-luxury-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
  )
)
LuxuryLabel.displayName = "LuxuryLabel"

export { LuxuryHeading, LuxuryText, LuxuryLabel }