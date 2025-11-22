/**
 * Text Component
 *
 * A versatile text component for displaying text content with semantic variants.
 */

import type { FC, HTMLAttributes } from 'react'

export type TextVariant = 'body' | 'caption' | 'label' | 'overline' | 'code'
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold'
export type TextAs = 'span' | 'div' | 'p' | 'label' | 'code'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Semantic variant */
  variant?: TextVariant
  /** Text size */
  size?: TextSize
  /** Font weight */
  weight?: TextWeight
  /** Render as different element */
  as?: TextAs
  /** Additional CSS class names */
  className?: string
}

/**
 * Text component
 */
export const Text: FC<TextProps> = ({
  variant = 'body',
  size = 'md',
  weight = 'normal',
  as = 'span',
  children,
  className,
  ...props
}) => {
  const Component = as

  const classes = [
    'duro-text',
    `duro-text-${variant}`,
    `duro-text-${size}`,
    `duro-text-${weight}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
