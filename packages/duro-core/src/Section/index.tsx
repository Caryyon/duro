/**
 * Section Component
 *
 * Adaptive layout component that responds to theme configuration
 * and container queries for true component-level responsiveness.
 */

import type { FC, ReactNode, HTMLAttributes } from 'react'
import { useMemo } from 'react'

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  /** Section type from theme registry */
  section?: string
  /** Variant of the section */
  variant?: string
  /** HTML element to render as */
  as?: keyof JSX.IntrinsicElements
  /** Enable container queries */
  containerQuery?: boolean
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * Section component for adaptive layouts
 */
export const Section: FC<SectionProps> = ({
  section = 'stack',
  variant,
  as: Component = 'section',
  containerQuery = true,
  children,
  className,
  ...props
}) => {
  const sectionClass = useMemo(() => {
    const classes: string[] = []

    // Base section class
    classes.push(`duro-section-${section}`)

    // Add variant class if specified
    if (variant) {
      classes.push(`duro-section-${section}-${variant}`)
    }

    // Add container query class
    if (containerQuery) {
      classes.push('duro-container')
    }

    // Add any additional classes
    if (className) {
      classes.push(className)
    }

    return classes.join(' ')
  }, [section, variant, containerQuery, className])

  return (
    <Component
      className={sectionClass}
      data-duro-section={section}
      data-duro-variant={variant}
      style={{
        ...(containerQuery && { containerType: 'inline-size' as any }),
        ...props.style,
      }}
      {...(props as any)}
    >
      {children}
    </Component>
  )
}

/**
 * Hero section for landing pages
 */
export const Hero: FC<Omit<SectionProps, 'section'>> = (props) => (
  <Section section="hero" {...props} />
)

/**
 * Dashboard layout section
 */
export const Dashboard: FC<Omit<SectionProps, 'section'>> = (props) => (
  <Section section="dashboard" {...props} />
)

/**
 * Stack layout section (vertical spacing)
 */
export const Stack: FC<Omit<SectionProps, 'section'>> = (props) => (
  <Section section="stack" {...props} />
)

/**
 * Grid layout section
 * Note: containerQuery defaults to false so Grid queries parent container
 */
export const Grid: FC<Omit<SectionProps, 'section'>> = ({ containerQuery = false, ...props }) => (
  <Section section="grid" containerQuery={containerQuery} {...props} />
)

/**
 * Sidebar layout section
 */
export const Sidebar: FC<Omit<SectionProps, 'section'>> = (props) => (
  <Section section="sidebar" {...props} />
)

/**
 * Cluster layout section (flex wrap)
 */
export const Cluster: FC<Omit<SectionProps, 'section'>> = (props) => (
  <Section section="cluster" {...props} />
)
