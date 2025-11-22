/**
 * Badge Component
 *
 * Small labels for displaying status, tags, or categories.
 */

import type { FC, HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual variant */
  variant?: BadgeVariant
  /** Size */
  size?: BadgeSize
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * Badge component
 */
export const Badge: FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const classes = [
    'duro-badge',
    `duro-badge-${variant}`,
    `duro-badge-${size}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
