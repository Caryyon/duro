/**
 * Progress Component
 *
 * Display progress or loading state.
 */

import type { FC, HTMLAttributes } from 'react'

export type ProgressSize = 'sm' | 'md' | 'lg'
export type ProgressVariant = 'default' | 'primary' | 'success' | 'warning' | 'error'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value?: number
  /** Maximum value */
  max?: number
  /** Progress size */
  size?: ProgressSize
  /** Progress variant */
  variant?: ProgressVariant
  /** Additional CSS class names */
  className?: string
  /** Show indeterminate loading state */
  indeterminate?: boolean
}

/**
 * Progress component
 */
export const Progress: FC<ProgressProps> = ({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'default',
  className,
  indeterminate = false,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const classes = [
    'duro-progress',
    `duro-progress-${size}`,
    `duro-progress-${variant}`,
    indeterminate && 'duro-progress-indeterminate',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={indeterminate ? undefined : value}
      {...props}
    >
      <div
        className="duro-progress-indicator"
        style={indeterminate ? undefined : { width: `${percentage}%` }}
      />
    </div>
  )
}
