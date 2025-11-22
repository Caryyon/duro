/**
 * Tooltip Component
 *
 * Display additional information on hover.
 */

import { useState, useRef, type FC, type ReactNode, type HTMLAttributes } from 'react'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Tooltip content */
  content: ReactNode
  /** Tooltip position */
  position?: TooltipPosition
  /** Children elements (trigger) */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
  /** Delay before showing tooltip (ms) */
  delay?: number
}

/**
 * Tooltip component
 */
export const Tooltip: FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
  className,
  delay = 200,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  const classes = ['duro-tooltip', className].filter(Boolean).join(' ')

  const tooltipClasses = [
    'duro-tooltip-content',
    `duro-tooltip-${position}`,
    isVisible && 'duro-tooltip-visible',
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      <div className={tooltipClasses} role="tooltip">
        {content}
      </div>
    </div>
  )
}
