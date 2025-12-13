import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

const GlassCard = React.forwardRef<
    HTMLDivElement,
    HTMLMotionProps<"div">
>(({ className, ...props }, ref) => (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
            "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:bg-white/10 transition-colors duration-300",
            className
        )}
        {...props}
    />
))
GlassCard.displayName = "GlassCard"

export { Card, GlassCard }
