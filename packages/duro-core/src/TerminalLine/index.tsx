/**
 * TerminalLine Component
 *
 * A HUD-styled terminal output line with optional timestamp and type styling.
 */

import type { FC, HTMLAttributes, ReactNode } from 'react'

export type TerminalLineType = 'default' | 'warning' | 'error' | 'success' | 'info'

export interface TerminalLineProps extends HTMLAttributes<HTMLDivElement> {
  /** Prefix character (default: ">") */
  prefix?: string
  /** Optional timestamp */
  timestamp?: string
  /** Line type for styling */
  type?: TerminalLineType
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * TerminalLine component - Display a terminal-style output line
 */
export const TerminalLine: FC<TerminalLineProps> = ({
  prefix = '>',
  timestamp,
  type = 'default',
  children,
  className,
  ...props
}) => {
  const classes = [
    'duro-terminal-line',
    `duro-terminal-line-${type}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {timestamp && (
        <span className="duro-terminal-line-timestamp">[{timestamp}]</span>
      )}
      <span className="duro-terminal-line-prefix">{prefix}</span>
      <span className="duro-terminal-line-content">{children}</span>
    </div>
  )
}
