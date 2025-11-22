/**
 * Textarea Component
 *
 * Multi-line text input field.
 */

import type { FC, TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Additional CSS class names */
  className?: string
  /** Whether the textarea has an error */
  error?: boolean
  /** Full width textarea */
  fullWidth?: boolean
  /** Resize behavior */
  resize?: TextareaResize
}

/**
 * Textarea component
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, fullWidth, resize = 'vertical', ...props }, ref) => {
    const classes = [
      'duro-textarea',
      error && 'duro-textarea-error',
      fullWidth && 'duro-textarea-full-width',
      `duro-textarea-resize-${resize}`,
      className,
    ].filter(Boolean).join(' ')

    return (
      <textarea
        ref={ref}
        className={classes}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
