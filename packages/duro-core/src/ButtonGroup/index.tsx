/**
 * ButtonGroup Component
 *
 * Group multiple buttons together.
 */

import type { FC, HTMLAttributes, ReactNode } from 'react'

export type ButtonGroupOrientation = 'horizontal' | 'vertical'
export type ButtonGroupSize = 'sm' | 'md' | 'lg'

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation of the button group */
  orientation?: ButtonGroupOrientation
  /** Size variant */
  size?: ButtonGroupSize
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
  /** Attach buttons together */
  attached?: boolean
}

/**
 * ButtonGroup component
 */
export const ButtonGroup: FC<ButtonGroupProps> = ({
  orientation = 'horizontal',
  size = 'md',
  children,
  className,
  attached = false,
  ...props
}) => {
  const classes = [
    'duro-button-group',
    `duro-button-group-${orientation}`,
    `duro-button-group-${size}`,
    attached && 'duro-button-group-attached',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} role="group" {...props}>
      {children}
    </div>
  )
}
