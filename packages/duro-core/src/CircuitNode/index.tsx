/**
 * CircuitNode Component
 *
 * A HUD-styled circuit board node visualization.
 */

import type { FC, HTMLAttributes } from 'react'

export interface CircuitNodeProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the node in pixels */
  size?: number
  /** Whether the node is active */
  active?: boolean
  /** Additional CSS class names */
  className?: string
}

/**
 * CircuitNode component - Circuit board node visualization
 */
export const CircuitNode: FC<CircuitNodeProps> = ({
  size = 80,
  active = true,
  className,
  ...props
}) => {
  const classes = [
    'duro-circuit-node',
    active && 'duro-circuit-node-active',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 80 80">
        {/* Circuit traces */}
        <path
          d="M0,40 H20 L30,30 H50 L60,40 H80"
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          fill="none"
          strokeDasharray={active ? 'none' : '4 2'}
        />
        <path
          d="M40,0 V20 L30,30"
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          fill="none"
          strokeDasharray={active ? 'none' : '4 2'}
        />
        <path
          d="M40,80 V60 L50,50 H50 L50,30 L50,30"
          stroke="var(--duro-color-secondary)"
          strokeWidth="1"
          fill="none"
          strokeDasharray={active ? 'none' : '4 2'}
        />

        {/* Central node */}
        <rect
          x="25"
          y="25"
          width="30"
          height="30"
          fill="none"
          stroke="var(--duro-color-text)"
          strokeWidth="1"
        />
        <rect
          x="30"
          y="30"
          width="20"
          height="20"
          fill={active ? 'var(--duro-color-text)' : 'none'}
          stroke="var(--duro-color-text)"
          strokeWidth="1"
        />

        {/* Connection points */}
        <circle cx="20" cy="40" r="3" fill="var(--duro-color-text)" />
        <circle cx="60" cy="40" r="3" fill="var(--duro-color-text)" />
        <circle cx="40" cy="20" r="3" fill="var(--duro-color-text)" />
        <circle cx="40" cy="60" r="3" fill="var(--duro-color-text)" />
      </svg>
    </div>
  )
}
