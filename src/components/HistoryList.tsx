import type { HistoryEntry } from '../types'
import HistoryItem from './HistoryItem'

interface HistoryListProps {
  history: HistoryEntry[]
  onClear: () => void
}

export default function HistoryList({ history, onClear }: HistoryListProps) {
  return (
    <section className="w-full bg-surface-container-lowest rounded-lg shadow-[0_10px_30px_rgba(70,71,211,0.03)] p-8 flex flex-col items-center justify-center min-h-[300px]">
      <div className="flex justify-between items-center mb-6 w-full">
        <h2 className="font-headline font-bold text-2xl text-on-surface">Son 10 İşlem</h2>
        {history.length > 0 && (
          <button
            onClick={onClear}
            className="text-sm font-medium text-primary hover:text-primary-dim transition-colors"
          >
            Temizle
          </button>
        )}
      </div>
      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          <div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-5xl text-outline-variant">history_toggle_off</span>
          </div>
          <h3 className="font-headline font-medium text-xl text-on-surface">Henüz işlem yapılmadı</h3>
          <p className="font-body text-on-surface-variant max-w-[280px]">Sayacı kullanmaya başlayarak geçmişinizi burada görebilirsiniz.</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2">
          {history.map(entry => (
            <HistoryItem key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </section>
  )
}