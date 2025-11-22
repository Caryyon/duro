import type { FC } from 'react'
import { Grid } from 'theme-ui'
import dashboards from './theme'

enum Dashboards {
  admin,
  guest,
}

export interface DashboardProps {
  variant: keyof typeof Dashboards
  children: string
}

const Dashboard: FC<DashboardProps> = ({ children, ...props }) => (
  <Grid {...props} sx={dashboards[props.variant]}>
    {children}
  </Grid>
)

// exports component and component theme
export { Dashboard, dashboards }
