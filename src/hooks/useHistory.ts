import { useState, useCallback } from 'react'
import type { HistoryEntry } from '../types'
import { getItem, setItem } from '../utils/storage'

const STORAGE_KEY = 'counter-state'

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    const state = getItem<{ count: number; history: HistoryEntry[] }>(STORAGE_KEY, { count: 0, history: [] })
    return state.history
  })

  const clearHistory = useCallback(() => {
    const state = getItem<{ count: number; history: HistoryEntry[] }>(STORAGE_KEY, { count: 0, history: [] })
    const newState = { count: state.count, history: [] }
    setItem(STORAGE_KEY, newState)
    setHistory([])
  }, [])

  const refreshHistory = useCallback(() => {
    const state = getItem<{ count: number; history: HistoryEntry[] }>(STORAGE_KEY, { count: 0, history: [] })
    setHistory(state.history)
  }, [])

  return { history, clearHistory, refreshHistory }
}