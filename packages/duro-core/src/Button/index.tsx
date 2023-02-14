// import components from libraries
import type { FC } from 'react'
import { Button as UIButton } from 'theme-ui'
// import theme config
import buttons from './index.theme'

export interface ButtonProps {
  /**
   * One of a few variants
   */
  variant?: 'primary' | 'secondary'
  children: string
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => (
  <UIButton variant={variant} {...props}>
    {children}
  </UIButton>
)

// exports component and component theme
export { Button, buttons }
