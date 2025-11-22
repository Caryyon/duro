/**
 * Card Component
 *
 * A container with optional header, content, and footer sections.
 */

import type { FC, HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export type CardFooterJustify = 'start' | 'end' | 'center' | 'spaceBetween'

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
  /** Justify content alignment */
  justify?: CardFooterJustify
  /** Add border separator above footer */
  bordered?: boolean
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * Card component
 */
export const Card: FC<CardProps> = ({ children, className, ...props }) => {
  const classes = ['duro-card', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/**
 * CardHeader component
 */
export const CardHeader: FC<CardHeaderProps> = ({ children, className, ...props }) => {
  const classes = ['duro-card-header', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/**
 * CardTitle component
 */
export const CardTitle: FC<CardTitleProps> = ({ children, className, ...props }) => {
  const classes = ['duro-card-title', className].filter(Boolean).join(' ')

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  )
}

/**
 * CardDescription component
 */
export const CardDescription: FC<CardDescriptionProps> = ({ children, className, ...props }) => {
  const classes = ['duro-card-description', className].filter(Boolean).join(' ')

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

/**
 * CardContent component
 */
export const CardContent: FC<CardContentProps> = ({ children, className, ...props }) => {
  const classes = ['duro-card-content', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/**
 * CardFooter component
 */
export const CardFooter: FC<CardFooterProps> = ({ children, className, justify, bordered, ...props }) => {
  const classes = [
    'duro-card-footer',
    justify && `duro-card-footer-${justify}`,
    bordered && 'duro-card-footer-bordered',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
