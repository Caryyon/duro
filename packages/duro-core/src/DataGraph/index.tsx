/**
 * DataGraph Component
 *
 * A HUD-styled line graph visualization with grid lines.
 */

import type { FC, HTMLAttributes } from 'react'
import { useMemo } from 'react'

export interface DataGraphProps extends HTMLAttributes<HTMLDivElement> {
  /** Width of the graph in pixels */
  width?: number
  /** Height of the graph in pixels */
  height?: number
  /** Data points (array of values 0-1) */
  data?: number[]
  /** Additional CSS class names */
  className?: string
}

/**
 * DataGraph component - Line graph visualization
 */
export const DataGraph: FC<DataGraphProps> = ({
  width = 200,
  height = 60,
  data,
  className,
  ...props
}) => {
  const classes = [
    'duro-data-graph',
    className,
  ].filter(Boolean).join(' ')

  // Generate random data if not provided
  const points = useMemo(() => {
    const values = data || Array(12).fill(0).map(() => Math.random() * 0.6 + 0.2)
    return values.map((v, i) => ({
      x: (i / (values.length - 1)) * (width - 20) + 10,
      y: height - v * height
    }))
  }, [data, width, height])

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')

  return (
    <div
      className={classes}
      style={{ width, height }}
      {...props}
    >
      <svg width={width} height={height}>
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((y, i) => (
          <line
            key={i}
            x1="10"
            y1={height * y}
            x2={width - 10}
            y2={height * y}
            stroke="var(--duro-color-secondary)"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.3"
          />
        ))}

        {/* Data line */}
        <path
          d={pathD}
          fill="none"
          stroke="var(--duro-color-text)"
          strokeWidth="1.5"
        />

        {/* Data points */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="2"
            fill="var(--duro-color-text)"
          />
        ))}
      </svg>
    </div>
  )
}
