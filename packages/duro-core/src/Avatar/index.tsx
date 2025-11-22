/**
 * Avatar Component
 *
 * Display user profile images with fallback support.
 */

import type { FC, ImgHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import { useState } from 'react'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar size */
  size?: AvatarSize
  /** Additional CSS class names */
  className?: string
  /** Children elements */
  children: ReactNode
}

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Image source */
  src: string
  /** Alt text */
  alt: string
  /** Additional CSS class names */
  className?: string
}

export interface AvatarFallbackProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * Avatar component
 */
export const Avatar: FC<AvatarProps> = ({ size = 'md', children, className, ...props }) => {
  const classes = [
    'duro-avatar',
    `duro-avatar-${size}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/**
 * AvatarImage component
 */
export const AvatarImage: FC<AvatarImageProps> = ({ src, alt, className, ...props }) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return null
  }

  const classes = ['duro-avatar-image', className].filter(Boolean).join(' ')

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}

/**
 * AvatarFallback component
 */
export const AvatarFallback: FC<AvatarFallbackProps> = ({ children, className, ...props }) => {
  const classes = ['duro-avatar-fallback', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
