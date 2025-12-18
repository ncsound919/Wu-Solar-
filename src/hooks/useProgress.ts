import { useState, useEffect, useCallback } from 'react'

export interface ModuleProgress {
  completed: boolean
  quizScore: number | null
  quizCompleted: boolean
  lastVisited: string | null
}

export interface Progress {
  modules: {
    [key: string]: ModuleProgress
  }
  totalScore: number
  lastUpdated: string
}

const STORAGE_KEY = 'wu-solar-progress'

const defaultModuleProgress: ModuleProgress = {
  completed: false,
  quizScore: null,
  quizCompleted: false,
  lastVisited: null
}

const defaultProgress: Progress = {
  modules: {
    'gravitational-coherence': { ...defaultModuleProgress },
    'lyrical-density': { ...defaultModuleProgress },
    'atmosphere-shielding': { ...defaultModuleProgress },
    'time-capsule': { ...defaultModuleProgress }
  },
  totalScore: 0,
  lastUpdated: new Date().toISOString()
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored)
      }
    } catch {
      // If parsing fails, return default
    }
    return defaultProgress
  })

  // Save to localStorage whenever progress changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const markModuleVisited = useCallback((moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId] || defaultModuleProgress,
          lastVisited: new Date().toISOString()
        }
      },
      lastUpdated: new Date().toISOString()
    }))
  }, [])

  const markModuleCompleted = useCallback((moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId] || defaultModuleProgress,
          completed: true
        }
      },
      lastUpdated: new Date().toISOString()
    }))
  }, [])

  const saveQuizScore = useCallback((moduleId: string, score: number) => {
    setProgress(prev => {
      const oldScore = prev.modules[moduleId]?.quizScore || 0
      const scoreDiff = score - oldScore
      return {
        ...prev,
        modules: {
          ...prev.modules,
          [moduleId]: {
            ...prev.modules[moduleId] || defaultModuleProgress,
            quizScore: score,
            quizCompleted: true,
            completed: true
          }
        },
        totalScore: prev.totalScore + (scoreDiff > 0 ? scoreDiff : 0),
        lastUpdated: new Date().toISOString()
      }
    })
  }, [])

  const resetProgress = useCallback(() => {
    setProgress({
      modules: {
        'gravitational-coherence': { ...defaultModuleProgress },
        'lyrical-density': { ...defaultModuleProgress },
        'atmosphere-shielding': { ...defaultModuleProgress },
        'time-capsule': { ...defaultModuleProgress }
      },
      totalScore: 0,
      lastUpdated: new Date().toISOString()
    })
  }, [])

  const getModuleProgress = useCallback((moduleId: string): ModuleProgress => {
    return progress.modules[moduleId] || defaultModuleProgress
  }, [progress])

  const getCompletedModulesCount = useCallback(() => {
    return Object.values(progress.modules).filter(m => m.completed).length
  }, [progress])

  const getTotalModulesCount = useCallback(() => {
    return Object.keys(progress.modules).length
  }, [progress])

  return {
    progress,
    markModuleVisited,
    markModuleCompleted,
    saveQuizScore,
    resetProgress,
    getModuleProgress,
    getCompletedModulesCount,
    getTotalModulesCount
  }
}
