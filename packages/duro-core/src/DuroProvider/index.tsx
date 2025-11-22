/**
 * DuroProvider
 *
 * Context provider for Duro theme that works with both SSR and CSR.
 * Injects theme CSS as CSS custom properties.
 */

import type { FC, ReactNode } from 'react'
import { createContext, useContext, useMemo, useEffect } from 'react'
import type { DuroTheme } from '../theme'
import { duroTheme as defaultTheme } from '../theme'
import { generateThemeCSS } from '../theme/css-generator'

export interface DuroProviderProps {
  /** Theme object */
  theme?: DuroTheme
  /** Initial color mode */
  colorMode?: 'light' | 'dark' | 'system'
  /** Children elements */
  children: ReactNode
  /** Inject styles directly (useful for SSR) */
  injectStyles?: boolean
}

interface DuroContextValue {
  theme: DuroTheme
  colorMode: 'light' | 'dark' | 'system'
  setColorMode: (mode: 'light' | 'dark' | 'system') => void
}

const DuroContext = createContext<DuroContextValue | null>(null)

/**
 * Hook to access Duro theme context
 */
export function useDuroTheme() {
  const context = useContext(DuroContext)
  if (!context) {
    throw new Error('useDuroTheme must be used within DuroProvider')
  }
  return context
}

/**
 * DuroProvider component
 */
export const DuroProvider: FC<DuroProviderProps> = ({
  theme = defaultTheme,
  colorMode: initialColorMode = 'system',
  children,
  injectStyles = true,
}) => {
  const themeCSS = useMemo(() => generateThemeCSS(theme), [theme])

  useEffect(() => {
    // Set color mode on document
    if (typeof document !== 'undefined') {
      if (initialColorMode === 'system') {
        // Remove data-theme to let prefers-color-scheme take over
        document.documentElement.removeAttribute('data-theme')
      } else {
        document.documentElement.setAttribute('data-theme', initialColorMode)
      }
    }
  }, [initialColorMode])

  const contextValue: DuroContextValue = useMemo(
    () => ({
      theme,
      colorMode: initialColorMode,
      setColorMode: (mode: 'light' | 'dark' | 'system') => {
        if (typeof document !== 'undefined') {
          if (mode === 'system') {
            document.documentElement.removeAttribute('data-theme')
          } else {
            document.documentElement.setAttribute('data-theme', mode)
          }
        }
      },
    }),
    [theme, initialColorMode]
  )

  return (
    <DuroContext.Provider value={contextValue}>
      {injectStyles && (
        <style
          data-duro-theme
          dangerouslySetInnerHTML={{ __html: themeCSS }}
        />
      )}
      {children}
    </DuroContext.Provider>
  )
}

/**
 * Server-side theme injection helper
 * Use this in Next.js _document.tsx or other SSR contexts
 */
export function getServerThemeCSS(theme: DuroTheme = defaultTheme): string {
  return generateThemeCSS(theme)
}
