import { useState } from 'react'
import { useCounter } from './hooks/useCounter'
import { useHistory } from './hooks/useHistory'
import { useTheme } from './hooks/useTheme'
import CounterDisplay from './components/CounterDisplay'
import ActionButtons from './components/ActionButtons'
import HistoryList from './components/HistoryList'
import ThemeToggle from './components/ThemeToggle'

type Tab = 'sayac' | 'gecmis' | 'ayarlar'

function Header({ onToggleTheme }: { onToggleTheme: () => void }) {
  return (
    <header className="fixed top-0 w-full z-50 glass shadow-sm flex justify-between items-center px-6 py-4">
      <div className="text-2xl font-black text-primary font-headline tracking-tight">
        Sayac-9370982
      </div>
      <button
        onClick={onToggleTheme}
        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors scale-95 active:scale-90"
        aria-label="Tema değiştir"
      >
        <span className="material-symbols-outlined text-primary dark:text-indigo-400">
          dark_mode
        </span>
      </button>
    </header>
  )
}

function BottomNav({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (tab: Tab) => void }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-[3rem] glass shadow-[0_-10px_40px_rgba(99,102,241,0.08)]">
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3">
        <button
          onClick={() => onTabChange('sayac')}
          className={`flex flex-col items-center justify-center px-6 py-2 rounded-[2rem] scale-110 active:scale-95 transition-transform duration-300 ${
            activeTab === 'sayac'
              ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200'
              : 'text-slate-500 dark:text-slate-400 hover:text-indigo-500'
          }`}
        >
          <span className="material-symbols-outlined mb-1" style={activeTab === 'sayac' ? { fontVariationSettings: "'FILL' 1" } : {}}>add_circle</span>
          <span className="font-label text-xs font-medium">Sayac</span>
        </button>
        <button
          onClick={() => onTabChange('gecmis')}
          className={`flex flex-col items-center justify-center px-6 py-2 rounded-[2rem] scale-110 active:scale-95 transition-transform duration-300 ${
            activeTab === 'gecmis'
              ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200'
              : 'text-slate-500 dark:text-slate-400 hover:text-indigo-500'
          }`}
        >
          <span className="material-symbols-outlined mb-1" style={activeTab === 'gecmis' ? { fontVariationSettings: "'FILL' 1" } : {}}>history</span>
          <span className="font-label text-xs font-medium">Geçmiş</span>
        </button>
        <button
          onClick={() => onTabChange('ayarlar')}
          className={`flex flex-col items-center justify-center px-6 py-2 rounded-[2rem] scale-110 active:scale-95 transition-transform duration-300 ${
            activeTab === 'ayarlar'
              ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200'
              : 'text-slate-500 dark:text-slate-400 hover:text-indigo-500'
          }`}
        >
          <span className="material-symbols-outlined mb-1" style={activeTab === 'ayarlar' ? { fontVariationSettings: "'FILL' 1" } : {}}>settings</span>
          <span className="font-label text-xs font-medium">Ayarlar</span>
        </button>
      </div>
    </nav>
  )
}

function AyarlarTab({ theme, onToggleTheme }: { theme: ReturnType<typeof useTheme>['theme']; onToggleTheme: () => void }) {
  return (
    <section className="w-full bg-surface-container-lowest rounded-lg shadow-[0_10px_30px_rgba(70,71,211,0.03)] p-8">
      <h2 className="font-headline font-bold text-2xl text-on-surface mb-6">Ayarlar</h2>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </section>
  )
}

export default function App() {
  const { count, increment, decrement, reset } = useCounter()
  const { history, clearHistory } = useHistory()
  const { theme, toggleTheme } = useTheme()
  const [activeTab, setActiveTab] = useState<Tab>('sayac')

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header onToggleTheme={toggleTheme} />

      <main className="flex-1 flex flex-col items-center justify-start pt-24 md:pt-32 px-6 pb-32 md:pb-12 max-w-2xl mx-auto w-full">
        {activeTab === 'sayac' && (
          <>
            <CounterDisplay count={count} />
            <ActionButtons onIncrement={increment} onDecrement={decrement} onReset={reset} />
          </>
        )}
        {activeTab === 'gecmis' && (
          <HistoryList history={history} onClear={clearHistory} />
        )}
        {activeTab === 'ayarlar' && (
          <AyarlarTab theme={theme} onToggleTheme={toggleTheme} />
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}