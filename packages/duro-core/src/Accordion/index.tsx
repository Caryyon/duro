/**
 * Accordion Component
 *
 * A vertically stacked set of interactive headings that each reveal content.
 */

import { createContext, useContext, useState, type FC, type HTMLAttributes, type ButtonHTMLAttributes, ReactNode } from 'react'

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
  type: 'single' | 'multiple'
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined)

const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion compound components must be used within Accordion')
  }
  return context
}

export type AccordionType = 'single' | 'multiple'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** Accordion type - single or multiple items open */
  type?: AccordionType
  /** Default open items */
  defaultValue?: string | string[]
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Unique value for this item */
  value: string
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

interface AccordionItemContextValue {
  value: string
  isOpen: boolean
}

const AccordionItemContext = createContext<AccordionItemContextValue | undefined>(undefined)

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error('AccordionTrigger and AccordionContent must be used within AccordionItem')
  }
  return context
}

/**
 * Accordion container component
 */
export const Accordion: FC<AccordionProps> = ({
  type = 'single',
  defaultValue,
  children,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultValue) return []
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  })

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value])
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      )
    }
  }

  const classes = ['duro-accordion', className].filter(Boolean).join(' ')

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={classes} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

/**
 * AccordionItem component
 */
export const AccordionItem: FC<AccordionItemProps> = ({ value, children, className, ...props }) => {
  const { openItems } = useAccordionContext()
  const isOpen = openItems.includes(value)

  const classes = [
    'duro-accordion-item',
    isOpen && 'duro-accordion-item-open',
    className,
  ].filter(Boolean).join(' ')

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={classes} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

/**
 * AccordionTrigger component
 */
export const AccordionTrigger: FC<AccordionTriggerProps> = ({ children, className, ...props }) => {
  const { toggleItem } = useAccordionContext()
  const { value, isOpen } = useAccordionItemContext()

  const classes = [
    'duro-accordion-trigger',
    isOpen && 'duro-accordion-trigger-open',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
      type="button"
      {...props}
    >
      {children}
      <span className="duro-accordion-chevron" aria-hidden="true">
        ▼
      </span>
    </button>
  )
}

/**
 * AccordionContent component
 */
export const AccordionContent: FC<AccordionContentProps> = ({ children, className, ...props }) => {
  const { isOpen } = useAccordionItemContext()

  const classes = [
    'duro-accordion-content',
    isOpen && 'duro-accordion-content-open',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="duro-accordion-content-inner">{children}</div>
    </div>
  )
}
