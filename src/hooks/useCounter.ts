import { useState, useCallback } from 'react'
import type { CounterState, HistoryEntry } from '../types'
import { getItem, setItem } from '../utils/storage'

const STORAGE_KEY = 'counter-state'

function loadState(): CounterState {
  return getItem<CounterState>(STORAGE_KEY, { count: 0, history: [] })
}

function saveState(state: CounterState): void {
  setItem(STORAGE_KEY, state)
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}

export function useCounter() {
  const [state, setState] = useState<CounterState>(() => loadState())

  const persist = useCallback((newState: CounterState) => {
    saveState(newState)
    setState(newState)
  }, [])

  const increment = useCallback(() => {
    const newCount = state.count + 1
    const newEntry: HistoryEntry = {
      id: generateId(),
      value: newCount,
      timestamp: Date.now(),
      action: 'increment',
    }
    const newState: CounterState = {
      count: newCount,
      history: [newEntry, ...state.history].slice(0, 10),
    }
    persist(newState)
  }, [state, persist])

  const decrement = useCallback(() => {
    const newCount = state.count - 1
    const newEntry: HistoryEntry = {
      id: generateId(),
      value: newCount,
      timestamp: Date.now(),
      action: 'decrement',
    }
    const newState: CounterState = {
      count: newCount,
      history: [newEntry, ...state.history].slice(0, 10),
    }
    persist(newState)
  }, [state, persist])

  const reset = useCallback(() => {
    const newEntry: HistoryEntry = {
      id: generateId(),
      value: 0,
      timestamp: Date.now(),
      action: 'reset',
    }
    const newState: CounterState = {
      count: 0,
      history: [newEntry, ...state.history].slice(0, 10),
    }
    persist(newState)
  }, [state, persist])

  return { count: state.count, history: state.history, increment, decrement, reset }
}