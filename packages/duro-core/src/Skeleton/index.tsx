/**
 * Skeleton Component
 *
 * Loading state placeholder.
 */

import type { FC, HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Width of the skeleton */
  width?: string | number
  /** Height of the skeleton */
  height?: string | number
  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  /** Additional CSS class names */
  className?: string
}

/**
 * Skeleton component
 */
export const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  radius = 'md',
  className,
  style,
  ...props
}) => {
  const classes = [
    'duro-skeleton',
    `duro-skeleton-radius-${radius}`,
    className,
  ].filter(Boolean).join(' ')

  const inlineStyles = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  return <div className={classes} style={inlineStyles} {...props} />
}
