/**
 * GridPattern Component
 *
 * A HUD-styled background grid pattern.
 */

import type { FC, HTMLAttributes } from 'react'

export interface GridPatternProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the pattern area */
  size?: number
  /** Grid cell size in pixels */
  cellSize?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * GridPattern component - Background grid pattern
 */
export const GridPattern: FC<GridPatternProps> = ({
  size = 100,
  cellSize = 10,
  className,
  ...props
}) => {
  const classes = [
    'duro-grid-pattern',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{
        width: size,
        height: size,
        backgroundSize: `${cellSize}px ${cellSize}px`
      }}
      {...props}
    />
  )
}
