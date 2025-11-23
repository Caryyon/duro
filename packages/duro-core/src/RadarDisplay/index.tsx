/**
 * RadarDisplay Component
 *
 * A HUD-styled animated radar display with sweep line and blips.
 */

import type { FC, HTMLAttributes } from 'react'

export interface RadarDisplayProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the radar in pixels */
  size?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * RadarDisplay component - Animated radar scanner visualization
 */
export const RadarDisplay: FC<RadarDisplayProps> = ({
  size = 200,
  className,
  ...props
}) => {
  const classes = [
    'duro-radar-display',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size} className="duro-radar-display-svg">
        {/* Concentric circles */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 4}
          fill="none"
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          fill="none"
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />

        {/* Cross lines */}
        <line
          x1={size / 2}
          y1="0"
          x2={size / 2}
          y2={size}
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.3"
        />
        <line
          x1="0"
          y1={size / 2}
          x2={size}
          y2={size / 2}
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* Diagonal lines */}
        <line
          x1="0"
          y1="0"
          x2={size}
          y2={size}
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.2"
        />
        <line
          x1={size}
          y1="0"
          x2="0"
          y2={size}
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.2"
        />

        {/* Blips */}
        <circle cx={size / 2 + 30} cy={size / 2 - 40} r="4" fill="var(--duro-color-text)" />
        <circle cx={size / 2 - 50} cy={size / 2 + 20} r="3" fill="var(--duro-color-text)" opacity="0.7" />
        <circle cx={size / 2 + 10} cy={size / 2 + 60} r="3" fill="var(--duro-color-text)" opacity="0.5" />

        {/* Sweep line */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={size - 20}
          y2={size / 2 - 40}
          stroke="var(--duro-color-text)"
          strokeWidth="2"
          opacity="0.8"
          className="duro-radar-display-sweep"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${size / 2} ${size / 2}`}
            to={`360 ${size / 2} ${size / 2}`}
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* Corner brackets */}
      <div className="duro-radar-display-corner duro-radar-display-corner-tl" />
      <div className="duro-radar-display-corner duro-radar-display-corner-tr" />
      <div className="duro-radar-display-corner duro-radar-display-corner-bl" />
      <div className="duro-radar-display-corner duro-radar-display-corner-br" />
    </div>
  )
}
