import * as React from "react"
import { cn } from "@/lib/utils"

const Section = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
    <section
        ref={ref}
        className={cn("py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
        {...props}
    />
))
Section.displayName = "Section"

export { Section }
