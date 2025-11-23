/**
 * WaveformDisplay Component
 *
 * A HUD-styled animated waveform/audio visualization.
 */

import type { FC, HTMLAttributes } from 'react'

export interface WaveformDisplayProps extends HTMLAttributes<HTMLDivElement> {
  /** Height of the waveform in pixels */
  height?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * WaveformDisplay component - Animated waveform visualization
 */
export const WaveformDisplay: FC<WaveformDisplayProps> = ({
  height = 60,
  className,
  ...props
}) => {
  const classes = [
    'duro-waveform-display',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ height }}
      {...props}
    >
      <svg
        width="100%"
        height={height}
        preserveAspectRatio="none"
        className="duro-waveform-display-svg"
      >
        {/* Animated waveform path */}
        <path
          d={`M0,${height / 2} Q25,${height * 0.2} 50,${height / 2} T100,${height / 2} T150,${height / 2} T200,${height / 2} T250,${height / 2} T300,${height / 2} T350,${height / 2} T400,${height / 2}`}
          fill="none"
          stroke="var(--duro-color-text)"
          strokeWidth="1"
          opacity="0.8"
          className="duro-waveform-display-wave"
        >
          <animate
            attributeName="d"
            dur="2s"
            repeatCount="indefinite"
            values={`M0,${height / 2} Q25,${height * 0.3} 50,${height / 2} T100,${height / 2} T150,${height / 2} T200,${height / 2} T250,${height / 2} T300,${height / 2} T350,${height / 2} T400,${height / 2};M0,${height / 2} Q25,${height * 0.7} 50,${height / 2} T100,${height / 2} T150,${height / 2} T200,${height / 2} T250,${height / 2} T300,${height / 2} T350,${height / 2} T400,${height / 2};M0,${height / 2} Q25,${height * 0.3} 50,${height / 2} T100,${height / 2} T150,${height / 2} T200,${height / 2} T250,${height / 2} T300,${height / 2} T350,${height / 2} T400,${height / 2}`}
          />
        </path>

        {/* Baseline */}
        <line
          x1="0"
          y1={height / 2}
          x2="100%"
          y2={height / 2}
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}
