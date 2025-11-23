/**
 * BinaryDisplay Component
 *
 * A HUD-styled binary data stream display.
 */

import type { FC, HTMLAttributes } from 'react'
import { useMemo } from 'react'

export interface BinaryDisplayProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of rows to display */
  rows?: number
  /** Characters per row */
  columns?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * BinaryDisplay component - Binary data stream visualization
 */
export const BinaryDisplay: FC<BinaryDisplayProps> = ({
  rows = 4,
  columns = 32,
  className,
  ...props
}) => {
  const classes = [
    'duro-binary-display',
    className,
  ].filter(Boolean).join(' ')

  const binaryData = useMemo(() => {
    return Array(rows).fill(0).map(() =>
      Array(columns).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')
    )
  }, [rows, columns])

  return (
    <div className={classes} {...props}>
      {binaryData.map((row, i) => (
        <div key={i} className="duro-binary-display-row">{row}</div>
      ))}
    </div>
  )
}
