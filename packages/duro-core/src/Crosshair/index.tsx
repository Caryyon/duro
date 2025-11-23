/**
 * Crosshair Component
 *
 * A HUD-styled targeting crosshair visualization.
 */

import type { FC, HTMLAttributes } from 'react'

export interface CrosshairProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the crosshair in pixels */
  size?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * Crosshair component - Targeting reticle visualization
 */
export const Crosshair: FC<CrosshairProps> = ({
  size = 100,
  className,
  ...props
}) => {
  const classes = [
    'duro-crosshair',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size}>
        {/* Outer circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 4}
          fill="none"
          stroke="var(--duro-color-text)"
          strokeWidth="1"
        />

        {/* Inner circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 4}
          fill="none"
          stroke="var(--duro-color-text)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Crosshair lines */}
        <line x1={size / 2} y1="4" x2={size / 2} y2={size / 2 - 15} stroke="var(--duro-color-text)" strokeWidth="1" />
        <line x1={size / 2} y1={size / 2 + 15} x2={size / 2} y2={size - 4} stroke="var(--duro-color-text)" strokeWidth="1" />
        <line x1="4" y1={size / 2} x2={size / 2 - 15} y2={size / 2} stroke="var(--duro-color-text)" strokeWidth="1" />
        <line x1={size / 2 + 15} y1={size / 2} x2={size - 4} y2={size / 2} stroke="var(--duro-color-text)" strokeWidth="1" />

        {/* Corner ticks - top left */}
        <line x1={size / 2 - 25} y1={size / 2 - 25} x2={size / 2 - 18} y2={size / 2 - 25} stroke="var(--duro-color-text)" strokeWidth="1" />
        <line x1={size / 2 - 25} y1={size / 2 - 25} x2={size / 2 - 25} y2={size / 2 - 18} stroke="var(--duro-color-text)" strokeWidth="1" />

        {/* Corner ticks - top right */}
        <line x1={size / 2 + 25} y1={size / 2 - 25} x2={size / 2 + 18} y2={size / 2 - 25} stroke="var(--duro-color-text)" strokeWidth="1" />
        <line x1={size / 2 + 25} y1={size / 2 - 25} x2={size / 2 + 25} y2={size / 2 - 18} stroke="var(--duro-color-text)" strokeWidth="1" />

        {/* Corner ticks - bottom left */}
        <line x1={size / 2 - 25} y1={size / 2 + 25} x2={size / 2 - 18} y2={size / 2 + 25} stroke="var(--duro-color-text)" strokeWidth="1" />
        <line x1={size / 2 - 25} y1={size / 2 + 25} x2={size / 2 - 25} y2={size / 2 + 18} stroke="var(--duro-color-text)" strokeWidth="1" />

        {/* Corner ticks - bottom right */}
        <line x1={size / 2 + 25} y1={size / 2 + 25} x2={size / 2 + 18} y2={size / 2 + 25} stroke="var(--duro-color-text)" strokeWidth="1" />
        <line x1={size / 2 + 25} y1={size / 2 + 25} x2={size / 2 + 25} y2={size / 2 + 18} stroke="var(--duro-color-text)" strokeWidth="1" />

        {/* Center dot */}
        <circle cx={size / 2} cy={size / 2} r="2" fill="var(--duro-color-text)" />
      </svg>
    </div>
  )
}
