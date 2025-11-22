/**
 * Box Component
 *
 * Primitive component for layout and styling using CSS custom properties.
 * This is the foundation component that other components build upon.
 */

import type { FC, HTMLAttributes, CSSProperties, ReactNode } from 'react'

export type BoxMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type BoxPadding = 'none' | 'sm' | 'md' | 'lg'

export interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /** HTML element to render as */
  as?: keyof JSX.IntrinsicElements
  /** Children elements */
  children?: ReactNode
  /** Additional CSS class names */
  className?: string
  /** Inline styles */
  style?: CSSProperties
  /** Max width constraint */
  maxWidth?: BoxMaxWidth
  /** Padding preset */
  padding?: BoxPadding
  /** Center the box horizontally */
  centered?: boolean
}

/**
 * Box component - the primitive building block
 */
export const Box: FC<BoxProps> = ({
  as: Component = 'div',
  children,
  className,
  style,
  maxWidth,
  padding,
  centered,
  ...props
}) => {
  const classes = [
    'duro-box',
    maxWidth && `duro-box-max-${maxWidth}`,
    padding && `duro-box-padding-${padding}`,
    centered && 'duro-box-centered',
    className,
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes} style={style} {...(props as any)}>
      {children}
    </Component>
  )
}
