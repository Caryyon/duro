/**
 * StatusIndicator Component
 *
 * A HUD-styled status indicator with label.
 */

import type { FC, HTMLAttributes } from 'react'

export type StatusIndicatorStatus = 'active' | 'standby' | 'offline' | 'error'

export interface StatusIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Status state */
  status: StatusIndicatorStatus
  /** Label text */
  label?: string
  /** Additional CSS class names */
  className?: string
}

/**
 * StatusIndicator component - Status dot with label
 */
export const StatusIndicator: FC<StatusIndicatorProps> = ({
  status,
  label,
  className,
  ...props
}) => {
  const classes = [
    'duro-status-indicator',
    `duro-status-indicator-${status}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="duro-status-indicator-dot" />
      {label && <span className="duro-status-indicator-label">{label}</span>}
    </div>
  )
}
