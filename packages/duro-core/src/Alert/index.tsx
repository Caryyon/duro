/**
 * Alert Component
 *
 * Display important messages and feedback to users.
 */

import type { FC, HTMLAttributes, ReactNode } from 'react'

export type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Alert variant */
  variant?: AlertVariant
  /** Additional CSS class names */
  className?: string
  /** Children elements */
  children: ReactNode
}

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface AlertDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * Alert component
 */
export const Alert: FC<AlertProps> = ({
  variant = 'default',
  children,
  className,
  ...props
}) => {
  const classes = [
    'duro-alert',
    `duro-alert-${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} role="alert" {...props}>
      {children}
    </div>
  )
}

/**
 * AlertTitle component
 */
export const AlertTitle: FC<AlertTitleProps> = ({ children, className, ...props }) => {
  const classes = ['duro-alert-title', className].filter(Boolean).join(' ')

  return (
    <h5 className={classes} {...props}>
      {children}
    </h5>
  )
}

/**
 * AlertDescription component
 */
export const AlertDescription: FC<AlertDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = ['duro-alert-description', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
