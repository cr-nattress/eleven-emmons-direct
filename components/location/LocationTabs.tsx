// components/location/LocationTabs.tsx
'use client'

import { useCallback } from 'react'

export interface Tab {
  id: string
  label: string
  icon?: string
}

interface LocationTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export default function LocationTabs({
  tabs,
  activeTab,
  onTabChange,
}: LocationTabsProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      let newIndex = currentIndex

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
      } else if (e.key === 'Home') {
        e.preventDefault()
        newIndex = 0
      } else if (e.key === 'End') {
        e.preventDefault()
        newIndex = tabs.length - 1
      } else {
        return
      }

      onTabChange(tabs[newIndex].id)
    },
    [tabs, onTabChange]
  )

  return (
    <div className="border-b border-gray-200 mb-8">
      <nav
        className="flex gap-4 overflow-x-auto scrollbar-hide -mb-px"
        aria-label="Location information tabs"
        role="tablist"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm
                transition-colors duration-200 flex items-center gap-2
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                ${
                  isActive
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.icon && (
                <span className="text-lg" aria-hidden="true">
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          )
        })}
      </nav>

      {/* Screen reader status announcement */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {tabs.find((t) => t.id === activeTab)?.label} tab activated
      </div>
    </div>
  )
}
