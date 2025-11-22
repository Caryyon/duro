/**
 * Button Component
 *
 * Modern button component using CSS custom properties.
 * Works seamlessly with SSR and has zero runtime CSS-in-JS overhead.
 * Requires importing '@duro/core/styles' in your app.
 */

import type { FC, ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Children elements */
  children: ReactNode
  /** Disabled state */
  disabled?: boolean
}

/**
 * Button component
 */
export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  className,
  ...props
}) => {
  const buttonClasses = [
    'duro-button',
    `duro-button-${variant}`,
    size !== 'md' && `duro-button-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
