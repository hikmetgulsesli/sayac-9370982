interface ActionButtonsProps {
  onIncrement: () => void
  onDecrement: () => void
  onReset: () => void
}

export default function ActionButtons({ onIncrement, onDecrement, onReset }: ActionButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center justify-center gap-6 w-full">
        <button
          onClick={onDecrement}
          aria-label="Azalt"
          className="w-20 h-20 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center shadow-[0_20px_40px_rgba(70,71,211,0.04)] hover:shadow-[0_20px_40px_rgba(70,71,211,0.08)] transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 600" }}>remove</span>
        </button>
        <button
          onClick={onIncrement}
          aria-label="Arttır"
          className="w-28 h-28 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shadow-[0_20px_40px_rgba(70,71,211,0.2)] hover:shadow-[0_20px_40px_rgba(70,71,211,0.3)] transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'wght' 700" }}>add</span>
        </button>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={onReset}
          aria-label="Sıfırla"
          className="px-6 py-3 rounded-full bg-surface-container text-secondary font-medium font-label flex items-center gap-2 hover:bg-surface-container-high transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 500" }}>refresh</span>
          <span>Sıfırla</span>
        </button>
      </div>
    </div>
  )
}