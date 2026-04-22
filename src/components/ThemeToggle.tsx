import type { Theme } from '../types'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-black/5">
      <div>
        <p className="font-medium text-on-surface">Karanlık Mod</p>
        <p className="text-sm text-on-surface-variant">Koyu tema kullan</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative w-14 h-8 rounded-full transition-colors ${theme === 'dark' ? 'bg-primary' : 'bg-surface-container-high'}`}
        role="switch"
        aria-checked={theme === 'dark'}
        aria-label="Karanlık modu aç/kapat"
      >
        <span
          className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}`}
        />
      </button>
    </div>
  )
}