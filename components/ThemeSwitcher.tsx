
"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-transparent hover:bg-green-900/30 text-green-400 font-mono font-bold px-6 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  )
}
