import type { HistoryEntry } from '../types'
import { formatTime } from '../utils/time'

interface HistoryItemProps {
  entry: HistoryEntry
}

export default function HistoryItem({ entry }: HistoryItemProps) {
  const icons: Record<string, string> = {
    increment: 'add',
    decrement: 'remove',
    reset: 'refresh',
  }
  const labels: Record<string, string> = {
    increment: 'Arttırıldı',
    decrement: 'Azaltıldı',
    reset: 'Sıfırlandı',
  }

  return (
    <div className="flex items-center justify-between py-4 border-b border-black/5 last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-xl">{icons[entry.action || 'increment']}</span>
        </div>
        <div>
          <p className="font-medium text-on-surface">{labels[entry.action || 'increment']}</p>
          <p className="text-sm text-on-surface-variant">{formatTime(entry.timestamp)}</p>
        </div>
      </div>
      <span className="font-headline font-bold text-primary">{entry.value}</span>
    </div>
  )
}