/**
 * HudPanel Component
 *
 * A HUD-styled panel container with corner brackets and optional status badge.
 */

import type { FC, HTMLAttributes, ReactNode } from 'react'

export interface HudPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Panel title displayed in header */
  title: string
  /** Optional status badge text */
  status?: string
  /** Remove padding from content area */
  noPadding?: boolean
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * HudPanel component - A styled container with corner brackets and header
 */
export const HudPanel: FC<HudPanelProps> = ({
  title,
  status,
  noPadding = false,
  children,
  className,
  ...props
}) => {
  const classes = [
    'duro-hud-panel',
    noPadding && 'duro-hud-panel-no-padding',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {/* Corner brackets */}
      <div className="duro-hud-panel-corner duro-hud-panel-corner-tl" />
      <div className="duro-hud-panel-corner duro-hud-panel-corner-br" />

      {/* Header */}
      <div className="duro-hud-panel-header">
        <span className="duro-hud-panel-title">{title}</span>
        {status && (
          <span className="duro-hud-panel-status">{status}</span>
        )}
      </div>

      {/* Content */}
      <div className="duro-hud-panel-content">
        {children}
      </div>
    </div>
  )
}
