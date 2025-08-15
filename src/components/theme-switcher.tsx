"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const isDarkMode = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-colors ${isDarkMode ? 'text-muted-foreground' : 'text-foreground'}`} />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className={`h-[1.2rem] w-[1.2rem] transition-colors ${isDarkMode ? 'text-foreground' : 'text-muted-foreground'}`} />
    </div>
  )
}
