/**
 * Heading Component
 *
 * Semantic heading component with support for h1-h6.
 */

import { createElement, type FC, type HTMLAttributes } from 'react'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingVariant = 'display' | 'heading' | 'subheading'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (h1-h6) */
  level?: HeadingLevel
  /** Visual variant */
  variant?: HeadingVariant
  /** Additional CSS class names */
  className?: string
}

/**
 * Heading component
 */
export const Heading: FC<HeadingProps> = ({
  level = 2,
  variant = 'heading',
  children,
  className,
  ...props
}) => {
  const tag = `h${level}` as const

  const classes = [
    'duro-heading',
    `duro-heading-${level}`,
    `duro-heading-${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return createElement(
    tag,
    { className: classes, ...props },
    children
  )
}
