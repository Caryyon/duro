/**
 * DecorativeLine Component
 *
 * A HUD-styled decorative horizontal line with center diamond.
 */

import type { FC, HTMLAttributes } from 'react'

export interface DecorativeLineProps extends HTMLAttributes<HTMLDivElement> {
  /** Width of the line */
  width?: string | number
  /** Additional CSS class names */
  className?: string
}

/**
 * DecorativeLine component - Decorative divider line
 */
export const DecorativeLine: FC<DecorativeLineProps> = ({
  width = '100%',
  className,
  ...props
}) => {
  const classes = [
    'duro-decorative-line',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ width }}
      {...props}
    >
      <div className="duro-decorative-line-diamond" />
    </div>
  )
}
