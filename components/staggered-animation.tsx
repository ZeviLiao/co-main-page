"use client"

import type React from "react"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Children, cloneElement, isValidElement } from "react"

interface StaggeredAnimationProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "scale-up"
}

export function StaggeredAnimation({
  children,
  className,
  staggerDelay = 100,
  animation = "fade-up",
}: StaggeredAnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const animationClasses = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    "fade-down": {
      initial: "opacity-0 -translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "fade-in": {
      initial: "opacity-0",
      animate: "opacity-100",
    },
    "scale-up": {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
  }

  const { initial, animate } = animationClasses[animation]

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            className: cn(child.props.className, "transition-all duration-700 ease-out", isInView ? animate : initial),
            style: {
              ...child.props.style,
              transitionDelay: `${index * staggerDelay}ms`,
            },
          })
        }
        return child
      })}
    </div>
  )
}
