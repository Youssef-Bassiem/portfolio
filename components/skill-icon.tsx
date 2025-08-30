import type React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillIconProps {
  name: string
  icon?: React.ReactNode
  className?: string
}

export function SkillIcon({ name, icon, className }: SkillIconProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-200 cursor-default w-full justify-start",
        className,
      )}
    >
      {icon}
      <span className="truncate">{name}</span>
    </Badge>
  )
}
