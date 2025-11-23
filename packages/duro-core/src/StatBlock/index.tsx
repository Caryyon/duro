/**
 * StatBlock Component
 *
 * A HUD-styled statistics display block with label, value, unit, and optional trend indicator.
 */

import type { FC, HTMLAttributes } from 'react'

export interface StatBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text displayed above the value */
  label: string
  /** Main value to display */
  value: string | number
  /** Unit suffix (e.g., "GB", "%", "ms") */
  unit?: string
  /** Trend percentage (positive = up, negative = down) */
  trend?: number
  /** Use smaller size variant */
  small?: boolean
  /** Additional CSS class names */
  className?: string
}

/**
 * StatBlock component - Display statistics with label, value, and optional trend
 */
export const StatBlock: FC<StatBlockProps> = ({
  label,
  value,
  unit = '',
  trend,
  small = false,
  className,
  ...props
}) => {
  const classes = [
    'duro-stat-block',
    small && 'duro-stat-block-small',
    className,
  ].filter(Boolean).join(' ')

  const showTrend = trend !== undefined && trend !== 0

  return (
    <div className={classes} {...props}>
      {/* Corner brackets */}
      <div className="duro-stat-block-corner duro-stat-block-corner-tl" />
      <div className="duro-stat-block-corner duro-stat-block-corner-br" />

      <div className="duro-stat-block-label">{label}</div>
      <div className="duro-stat-block-value">
        {value}
        {unit && <span className="duro-stat-block-unit">{unit}</span>}
      </div>
      {showTrend && (
        <div className="duro-stat-block-trend">
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}
    </div>
  )
}
