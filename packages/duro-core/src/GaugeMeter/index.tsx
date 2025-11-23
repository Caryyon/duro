/**
 * GaugeMeter Component
 *
 * A HUD-styled semi-circular gauge meter visualization.
 */

import type { FC, HTMLAttributes } from 'react'

export interface GaugeMeterProps extends HTMLAttributes<HTMLDivElement> {
  /** Value (0-100) */
  value?: number
  /** Size of the gauge in pixels */
  size?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * GaugeMeter component - Semi-circular gauge visualization
 */
export const GaugeMeter: FC<GaugeMeterProps> = ({
  value = 65,
  size = 100,
  className,
  ...props
}) => {
  const classes = [
    'duro-gauge-meter',
    className,
  ].filter(Boolean).join(' ')

  const radius = size / 2 - 10
  const centerX = size / 2
  const centerY = size / 2

  // Angle in radians: 0% = π (left), 100% = 0 (right), sweeping through top
  const angleRad = Math.PI * (1 - value / 100)

  // Calculate the end point of the value arc
  const endX = centerX + radius * Math.cos(angleRad)
  const endY = centerY - radius * Math.sin(angleRad)

  // Determine if the arc is greater than 180 degrees (for SVG arc flag)
  const largeArcFlag = value > 50 ? 1 : 0

  return (
    <div
      className={classes}
      style={{ width: size, height: size / 2 + 20 }}
      {...props}
    >
      <svg width={size} height={size / 2 + 20}>
        {/* Background arc */}
        <path
          d={`M10,${centerY} A${radius},${radius} 0 0,1 ${size - 10},${centerY}`}
          fill="none"
          stroke="var(--duro-color-secondary)"
          strokeWidth="4"
          strokeDasharray="4 2"
          opacity="0.5"
        />

        {/* Value arc */}
        <path
          d={`M10,${centerY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`}
          fill="none"
          stroke="var(--duro-color-text)"
          strokeWidth="4"
        />

        {/* Tick marks */}
        {[0, 25, 50, 75, 100].map((tick) => {
          const tickRad = Math.PI * (1 - tick / 100)
          const x1 = centerX + (radius - 8) * Math.cos(tickRad)
          const y1 = centerY - (radius - 8) * Math.sin(tickRad)
          const x2 = centerX + (radius + 2) * Math.cos(tickRad)
          const y2 = centerY - (radius + 2) * Math.sin(tickRad)
          return (
            <line
              key={tick}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--duro-color-text)"
              strokeWidth="1"
            />
          )
        })}

        {/* Center point */}
        <circle cx={centerX} cy={centerY} r="4" fill="var(--duro-color-text)" />

        {/* Needle */}
        <line
          x1={centerX}
          y1={centerY}
          x2={centerX + (radius - 15) * Math.cos(angleRad)}
          y2={centerY - (radius - 15) * Math.sin(angleRad)}
          stroke="var(--duro-color-text)"
          strokeWidth="2"
        />
      </svg>

      <div className="duro-gauge-meter-value">{value}%</div>
    </div>
  )
}
