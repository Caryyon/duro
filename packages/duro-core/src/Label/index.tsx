/**
 * Label Component
 *
 * Accessible form field label.
 */

import type { FC, LabelHTMLAttributes, ReactNode } from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
  /** Whether the field is required */
  required?: boolean
  /** Whether the field has an error */
  error?: boolean
}

/**
 * Label component
 */
export const Label: FC<LabelProps> = ({
  children,
  className,
  required,
  error,
  ...props
}) => {
  const classes = [
    'duro-label',
    error && 'duro-label-error',
    className,
  ].filter(Boolean).join(' ')

  return (
    <label className={classes} {...props}>
      {children}
      {required && <span className="duro-label-required" aria-label="required">*</span>}
    </label>
  )
}
