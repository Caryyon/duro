/**
 * SignalStrength Component
 *
 * A HUD-styled signal strength bar indicator.
 */

import type { FC, HTMLAttributes } from 'react'

export interface SignalStrengthProps extends HTMLAttributes<HTMLDivElement> {
  /** Current signal strength (1 to max) */
  strength?: number
  /** Maximum signal bars */
  max?: number
  /** Additional CSS class names */
  className?: string
}

/**
 * SignalStrength component - Signal strength bar indicator
 */
export const SignalStrength: FC<SignalStrengthProps> = ({
  strength = 3,
  max = 5,
  className,
  ...props
}) => {
  const classes = [
    'duro-signal-strength',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {Array(max).fill(0).map((_, i) => (
        <div
          key={i}
          className={`duro-signal-strength-bar ${i < strength ? 'duro-signal-strength-bar-active' : ''}`}
          style={{ height: `${40 + i * 15}%` }}
        />
      ))}
    </div>
  )
}
