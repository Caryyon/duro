/**
 * Checkbox Component
 *
 * A styled checkbox input with custom appearance.
 */

import { forwardRef, type InputHTMLAttributes } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Additional CSS class names */
  className?: string
  /** Error state */
  error?: boolean
}

/**
 * Checkbox component
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, error, ...props }, ref) => {
    const classes = [
      'duro-checkbox',
      error && 'duro-checkbox-error',
      className,
    ].filter(Boolean).join(' ')

    return (
      <input
        ref={ref}
        type="checkbox"
        className={classes}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'
