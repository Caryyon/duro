/**
 * Section Registry and Helpers
 *
 * Utilities for creating and managing adaptive layout sections.
 */

import type { SectionDefinition, SectionLayout, SectionVariant } from './theme'

/**
 * Creates a section definition with base layout and variants
 */
export function createSection(config: {
  baseLayout: SectionLayout
  variants?: Record<string, SectionLayout>
  containerQueries?: Record<string, SectionLayout>
}): SectionDefinition {
  const { baseLayout, variants = {}, containerQueries = {} } = config

  // Convert simple layout objects to full variant objects
  const normalizedVariants: Record<string, SectionVariant | SectionLayout> = {}

  Object.entries(variants).forEach(([name, layout]) => {
    // All variants are stored as-is since SectionVariant | SectionLayout is our type
    normalizedVariants[name] = layout
  })

  return {
    baseLayout,
    variants: normalizedVariants,
  }
}

/**
 * Predefined section layouts
 */
export const sectionLayouts = {
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  } as SectionLayout,

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  } as SectionLayout,

  grid: {
    display: 'grid',
  } as SectionLayout,

  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--duro-space-4)',
  } as SectionLayout,

  cluster: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--duro-space-3)',
  } as SectionLayout,

  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as SectionLayout,

  sidebar: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 'var(--duro-space-4)',
  } as SectionLayout,
}

/**
 * Common section variants
 */
export const commonSections: Record<string, SectionDefinition> = {
  hero: createSection({
    baseLayout: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--duro-space-6)',
      gap: 'var(--duro-space-4)',
    },
    variants: {
      centered: {
        textAlign: 'center',
      },
      split: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'var(--duro-space-6)',
      },
    },
    containerQueries: {
      '768px': {
        padding: 'var(--duro-space-8)',
      },
    },
  }),

  dashboard: createSection({
    baseLayout: {
      display: 'grid',
      gap: 'var(--duro-space-4)',
      padding: 'var(--duro-space-4)',
    },
    variants: {
      admin: {
        gridTemplateAreas: '"header header" "sidebar main" "sidebar footer"',
        gridTemplateColumns: '250px 1fr',
        gridTemplateRows: 'auto 1fr auto',
      },
      guest: {
        gridTemplateAreas: '"header" "main" "footer"',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
      },
      simple: {
        gridTemplateColumns: '1fr',
      },
    },
  }),

  stack: createSection({
    baseLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--duro-space-4)',
    },
    variants: {
      tight: {
        gap: 'var(--duro-space-2)',
      },
      loose: {
        gap: 'var(--duro-space-6)',
      },
    },
  }),

  grid: createSection({
    baseLayout: {
      display: 'grid',
      gap: 'var(--duro-space-4)',
    },
    variants: {
      cols2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      cols3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      cols4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      responsive: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  }),

  sidebar: createSection({
    baseLayout: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'var(--duro-space-4)',
    },
    variants: {
      left: {
        gridTemplateColumns: '250px 1fr',
      },
      right: {
        gridTemplateColumns: '1fr 250px',
      },
      wide: {
        gridTemplateColumns: '350px 1fr',
      },
    },
  }),

  cluster: createSection({
    baseLayout: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--duro-space-3)',
      alignItems: 'flex-start',
    },
    variants: {
      center: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
    },
  }),
}
