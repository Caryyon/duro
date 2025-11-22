import type { FC } from 'react'
import { Box, Divider, Grid, Text } from 'theme-ui'
import fillers from './theme'
import { Variants } from '../shared'
import { numToArr } from '../utils'

export interface FillerProps {
  variant?: keyof typeof Variants
  count?: number
  stroke?: number
  children: string
}

const Filler: FC<FillerProps> = ({
  variant = 'primary',
  count = 7,
  stroke = 1,
  children,
  ...props
}) => {
  if (variant === 'primary') {
    return (
      <Box variant={variant} sx={fillers[variant]} {...props}>
        {numToArr(count).map((_, i) => (
          <Divider
            sx={{ borderBottom: `${stroke}px`, borderColor: 'text' }}
            key={i}
          />
        ))}
      </Box>
    )
  }
  if (variant === 'secondary') {
    return (
      <Grid
        variant={variant}
        columns={`repeat(${Math.ceil(count / 2)}, 1fr)`}
        sx={fillers[variant]}
        {...props}
      >
        {numToArr(count).map((_, i) => (
          <Grid
            columns={'repeat(5, 1fr)'}
            sx={{
              gridTemplateRows: `repeat(${Math.ceil(count / 2)}, 1fr)`,
              gap: 0,
              border: '1px solid',
              borderColor: 'text',
              '&:hover': {
                bg: 'text',
                cursor: 'cell',
              },
            }}
          >
            <Box
              sx={{
                bg: 'text',
                p: 1,
              }}
              key={i}
            />
            <Box
              sx={{
                gridArea: '5 / 5 / 6 / 6',
                bg: 'background',
                outlineColor: 'background',
                outlineStyle: 'solid',
                outlineWidth: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={i}
            >
              <Text
                sx={{
                  textAlign: 'center',
                  fontFamily: 'monospace',
                }}
              >
                {i}
              </Text>
            </Box>
          </Grid>
        ))}
      </Grid>
    )
  }
  // still fill the space of the grid
  return <Box />
}

// exports component and component theme
export { Filler, fillers }
