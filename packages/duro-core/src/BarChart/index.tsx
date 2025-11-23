/**
 * BarChart Component
 *
 * A HUD-styled vertical bar chart visualization.
 */

import type { FC, HTMLAttributes } from 'react'

export interface BarChartDataItem {
  /** Label for the bar */
  label: string
  /** Value (0-100 scale recommended) */
  value: number
  /** Whether this bar is highlighted/active */
  active?: boolean
}

export interface BarChartProps extends HTMLAttributes<HTMLDivElement> {
  /** Data array for the chart */
  data: BarChartDataItem[]
  /** Height of the chart in pixels */
  height?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * BarChart component - Vertical bar chart visualization
 */
export const BarChart: FC<BarChartProps> = ({
  data,
  height = 100,
  className,
  ...props
}) => {
  const classes = [
    'duro-bar-chart',
    className,
  ].filter(Boolean).join(' ')

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div
      className={classes}
      style={{ height }}
      {...props}
    >
      {data.map((item, i) => (
        <div key={i} className="duro-bar-chart-item">
          <div
            className={`duro-bar-chart-bar ${item.active ? 'duro-bar-chart-bar-active' : ''}`}
            style={{ height: `${(item.value / maxValue) * (height - 20)}px` }}
          />
          <span className="duro-bar-chart-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
