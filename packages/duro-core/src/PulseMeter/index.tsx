/**
 * PulseMeter Component
 *
 * A HUD-styled segmented level meter visualization.
 */

import type { FC, HTMLAttributes } from 'react'

export interface PulseMeterProps extends HTMLAttributes<HTMLDivElement> {
  /** Value (0-100) */
  value?: number
  /** Label text */
  label?: string
  /** Number of segments */
  segments?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * PulseMeter component - Segmented level meter visualization
 */
export const PulseMeter: FC<PulseMeterProps> = ({
  value = 75,
  label,
  segments = 10,
  className,
  ...props
}) => {
  const classes = [
    'duro-pulse-meter',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="duro-pulse-meter-bars">
        {Array(segments).fill(0).map((_, i) => {
          const threshold = ((i + 1) / segments) * 100
          const isActive = value >= threshold
          return (
            <div
              key={i}
              className={`duro-pulse-meter-bar ${isActive ? 'duro-pulse-meter-bar-active' : ''}`}
              style={{ height: `${40 + i * 6}%` }}
            />
          )
        })}
      </div>
      {label && <div className="duro-pulse-meter-label">{label}</div>}
    </div>
  )
}
