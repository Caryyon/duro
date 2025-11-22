/**
 * Tabs Component
 *
 * A set of layered sections of content that are displayed one at a time.
 */

import { createContext, useContext, useState, type FC, type HTMLAttributes, type ButtonHTMLAttributes, ReactNode } from 'react'

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs compound components must be used within Tabs')
  }
  return context
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /** Default active tab value */
  defaultValue: string
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tab value */
  value: string
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Tab value */
  value: string
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * Tabs container component
 */
export const Tabs: FC<TabsProps> = ({ defaultValue, children, className, ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const classes = ['duro-tabs', className].filter(Boolean).join(' ')

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={classes} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

/**
 * TabsList component
 */
export const TabsList: FC<TabsListProps> = ({ children, className, ...props }) => {
  const classes = ['duro-tabs-list', className].filter(Boolean).join(' ')

  return (
    <div className={classes} role="tablist" {...props}>
      {children}
    </div>
  )
}

/**
 * TabsTrigger component
 */
export const TabsTrigger: FC<TabsTriggerProps> = ({ value, children, className, ...props }) => {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === value

  const classes = [
    'duro-tabs-trigger',
    isActive && 'duro-tabs-trigger-active',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * TabsContent component
 */
export const TabsContent: FC<TabsContentProps> = ({ value, children, className, ...props }) => {
  const { activeTab } = useTabsContext()
  const isActive = activeTab === value

  if (!isActive) {
    return null
  }

  const classes = ['duro-tabs-content', className].filter(Boolean).join(' ')

  return (
    <div className={classes} role="tabpanel" {...props}>
      {children}
    </div>
  )
}
