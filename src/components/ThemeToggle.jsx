import { Sun, Palette } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { toggleTheme, isPrimary } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {isPrimary ? <Sun className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
    </button>
  )
}

export default ThemeToggle