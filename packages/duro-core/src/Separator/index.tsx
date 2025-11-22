/**
 * Separator Component
 *
 * Visual divider between content sections.
 */

import type { FC, HTMLAttributes } from 'react'

export type SeparatorOrientation = 'horizontal' | 'vertical'

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation of the separator */
  orientation?: SeparatorOrientation
  /** Additional CSS class names */
  className?: string
  /** Whether the separator is decorative only */
  decorative?: boolean
}

/**
 * Separator component
 */
export const Separator: FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className,
  decorative = false,
  ...props
}) => {
  const classes = [
    'duro-separator',
    `duro-separator-${orientation}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      role={decorative ? 'presentation' : 'separator'}
      aria-orientation={orientation}
      className={classes}
      {...props}
    />
  )
}
