/**
 * Input Component
 *
 * Text input field with variants and states.
 */

import type { FC, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Additional CSS class names */
  className?: string
  /** Whether the input has an error */
  error?: boolean
  /** Full width input */
  fullWidth?: boolean
}

/**
 * Input component
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, fullWidth, type = 'text', ...props }, ref) => {
    const classes = [
      'duro-input',
      error && 'duro-input-error',
      fullWidth && 'duro-input-full-width',
      className,
    ].filter(Boolean).join(' ')

    return (
      <input
        ref={ref}
        type={type}
        className={classes}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
