/**
 * Switch Component
 *
 * A toggle switch control.
 */

import { forwardRef, type InputHTMLAttributes } from 'react'

export type SwitchSize = 'sm' | 'md' | 'lg'

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Switch size */
  size?: SwitchSize
  /** Additional CSS class names */
  className?: string
  /** Error state */
  error?: boolean
}

/**
 * Switch component
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ size = 'md', className, error, ...props }, ref) => {
    const classes = [
      'duro-switch',
      `duro-switch-${size}`,
      error && 'duro-switch-error',
      className,
    ].filter(Boolean).join(' ')

    return (
      <label className={classes}>
        <input
          ref={ref}
          type="checkbox"
          className="duro-switch-input"
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        <span className="duro-switch-slider" />
      </label>
    )
  }
)

Switch.displayName = 'Switch'
