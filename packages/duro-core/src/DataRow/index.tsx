/**
 * DataRow Component
 *
 * A HUD-styled key-value row for displaying labeled data.
 */

import type { FC, HTMLAttributes } from 'react'

export interface DataRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label: string
  /** Value text */
  value: string
  /** Highlight the value */
  highlight?: boolean
  /** Additional CSS class names */
  className?: string
}

/**
 * DataRow component - Display a label-value pair in a row
 */
export const DataRow: FC<DataRowProps> = ({
  label,
  value,
  highlight = false,
  className,
  ...props
}) => {
  const classes = [
    'duro-data-row',
    highlight && 'duro-data-row-highlight',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <span className="duro-data-row-label">{label}</span>
      <span className="duro-data-row-value">{value}</span>
    </div>
  )
}
