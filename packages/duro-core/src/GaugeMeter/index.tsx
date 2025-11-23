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

  const angle = (value / 100) * 180 - 90
  const radius = size / 2 - 10
  const angleRad = angle * Math.PI / 180

  // Calculate the end point of the value arc
  const endX = size / 2 + radius * Math.cos(angleRad)
  const endY = size / 2 - radius * Math.sin(angleRad)

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
          d={`M10,${size / 2} A${radius},${radius} 0 0,1 ${size - 10},${size / 2}`}
          fill="none"
          stroke="var(--duro-color-secondary)"
          strokeWidth="4"
          strokeDasharray="4 2"
          opacity="0.5"
        />

        {/* Value arc */}
        <path
          d={`M10,${size / 2} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`}
          fill="none"
          stroke="var(--duro-color-text)"
          strokeWidth="4"
        />

        {/* Tick marks */}
        {[0, 25, 50, 75, 100].map((tick) => {
          const tickAngle = (tick / 100) * 180 - 90
          const tickRad = tickAngle * Math.PI / 180
          const x1 = size / 2 + (radius - 8) * Math.cos(tickRad)
          const y1 = size / 2 - (radius - 8) * Math.sin(tickRad)
          const x2 = size / 2 + (radius + 2) * Math.cos(tickRad)
          const y2 = size / 2 - (radius + 2) * Math.sin(tickRad)
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
        <circle cx={size / 2} cy={size / 2} r="4" fill="var(--duro-color-text)" />

        {/* Needle */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={size / 2 + (radius - 15) * Math.cos(angleRad)}
          y2={size / 2 - (radius - 15) * Math.sin(angleRad)}
          stroke="var(--duro-color-text)"
          strokeWidth="2"
        />
      </svg>

      <div className="duro-gauge-meter-value">{value}%</div>
    </div>
  )
}
