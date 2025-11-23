/**
 * HexDisplay Component
 *
 * A HUD-styled hexadecimal memory dump display.
 */

import type { FC, HTMLAttributes } from 'react'
import { useMemo } from 'react'

export interface HexDisplayProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of hex values to display */
  count?: number
  /** Columns per row */
  columns?: number
  /** Additional CSS class names */
  className?: string
}

const DEFAULT_HEX_VALUES = [
  '0x7F', '0xA3', '0x4E', '0x9B', '0x2D', '0xF1', '0x8C', '0x56',
  '0x3A', '0xC7', '0x1E', '0x85', '0xD4', '0x69', '0xB2', '0x0F'
]

/**
 * HexDisplay component - Hexadecimal memory dump visualization
 */
export const HexDisplay: FC<HexDisplayProps> = ({
  count = 16,
  columns = 8,
  className,
  ...props
}) => {
  const classes = [
    'duro-hex-display',
    className,
  ].filter(Boolean).join(' ')

  const hexValues = useMemo(() => {
    if (count <= DEFAULT_HEX_VALUES.length) {
      return DEFAULT_HEX_VALUES.slice(0, count)
    }
    // Generate additional random hex values if needed
    const values = [...DEFAULT_HEX_VALUES]
    while (values.length < count) {
      const hex = Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0')
      values.push(`0x${hex}`)
    }
    return values
  }, [count])

  return (
    <div
      className={classes}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      {...props}
    >
      {hexValues.map((hex, i) => (
        <span
          key={i}
          className="duro-hex-display-value"
          style={{ opacity: Math.random() * 0.5 + 0.5 }}
        >
          {hex}
        </span>
      ))}
    </div>
  )
}
