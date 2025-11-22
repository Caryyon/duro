/**
 * Paragraph Component
 *
 * Semantic paragraph component for body text.
 */

import type { FC, HTMLAttributes } from 'react'

export type ParagraphSize = 'sm' | 'md' | 'lg'
export type ParagraphVariant = 'default' | 'lead' | 'muted'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Paragraph size */
  size?: ParagraphSize
  /** Visual variant */
  variant?: ParagraphVariant
  /** Additional CSS class names */
  className?: string
}

/**
 * Paragraph component
 */
export const Paragraph: FC<ParagraphProps> = ({
  size = 'md',
  variant = 'default',
  children,
  className,
  ...props
}) => {
  const classes = [
    'duro-paragraph',
    `duro-paragraph-${size}`,
    `duro-paragraph-${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
