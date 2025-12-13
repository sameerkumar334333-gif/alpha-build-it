"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowButton = ({
    children,
    className,
    onClick,
    disabled = false,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: disabled ? 0 : position.x, y: disabled ? 0 : position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={cn(
                "relative rounded-full px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300",
                disabled
                    ? "bg-slate-300 shadow-none cursor-not-allowed"
                    : "bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] hover:scale-105 active:scale-95",
                className
            )}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};
