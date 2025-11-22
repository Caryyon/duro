/**
 * Tests for sx prop transformer
 */

import { describe, it, expect } from 'vitest'
import { transformCode } from './test-utils'

describe('duro-swc-plugin', () => {
  describe('color transformations', () => {
    it('transforms bg to CSS variable', () => {
      const input = `<Box sx={{ bg: 'primary' }} />`
      const output = transformCode(input)
      expect(output).toContain('background: "var(--duro-color-primary)"')
    })

    it('transforms color to CSS variable', () => {
      const input = `<Box sx={{ color: 'secondary' }} />`
      const output = transformCode(input)
      expect(output).toContain('color: "var(--duro-color-secondary)"')
    })

    it('passes through literal color values', () => {
      const input = `<Box sx={{ bg: '#FF0000' }} />`
      const output = transformCode(input)
      expect(output).toContain('background: "#FF0000"')
    })
  })

  describe('spacing transformations', () => {
    it('transforms numeric padding to space variable', () => {
      const input = `<Box sx={{ p: 4 }} />`
      const output = transformCode(input)
      expect(output).toContain('padding: "var(--duro-space-4)"')
    })

    it('transforms margin shorthand', () => {
      const input = `<Box sx={{ m: 2 }} />`
      const output = transformCode(input)
      expect(output).toContain('margin: "var(--duro-space-2)"')
    })

    it('transforms directional padding', () => {
      const input = `<Box sx={{ pt: 3, pr: 4, pb: 3, pl: 4 }} />`
      const output = transformCode(input)
      expect(output).toContain('paddingTop: "var(--duro-space-3)"')
      expect(output).toContain('paddingRight: "var(--duro-space-4)"')
      expect(output).toContain('paddingBottom: "var(--duro-space-3)"')
      expect(output).toContain('paddingLeft: "var(--duro-space-4)"')
    })

    it('transforms px and py', () => {
      const input = `<Box sx={{ px: 4, py: 2 }} />`
      const output = transformCode(input)
      expect(output).toContain('paddingInline: "var(--duro-space-4)"')
      expect(output).toContain('paddingBlock: "var(--duro-space-2)"')
    })
  })

  describe('typography transformations', () => {
    it('transforms fontSize to font-size variable', () => {
      const input = `<Box sx={{ fontSize: 'lg' }} />`
      const output = transformCode(input)
      expect(output).toContain('fontSize: "var(--duro-font-size-lg)"')
    })

    it('transforms fontFamily', () => {
      const input = `<Box sx={{ fontFamily: 'heading' }} />`
      const output = transformCode(input)
      expect(output).toContain('fontFamily: "var(--duro-font-heading)"')
    })
  })

  describe('border and radius transformations', () => {
    it('transforms borderRadius', () => {
      const input = `<Box sx={{ borderRadius: 'md' }} />`
      const output = transformCode(input)
      expect(output).toContain('borderRadius: "var(--duro-radius-md)"')
    })

    it('transforms border', () => {
      const input = `<Box sx={{ border: 'thin' }} />`
      const output = transformCode(input)
      expect(output).toContain('border: "var(--duro-border-thin)"')
    })

    it('transforms boxShadow', () => {
      const input = `<Box sx={{ boxShadow: 'lg' }} />`
      const output = transformCode(input)
      expect(output).toContain('boxShadow: "var(--duro-shadow-lg)"')
    })
  })

  describe('passthrough properties', () => {
    it('passes through display', () => {
      const input = `<Box sx={{ display: 'flex' }} />`
      const output = transformCode(input)
      expect(output).toContain('display: "flex"')
    })

    it('passes through flexbox properties', () => {
      const input = `<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} />`
      const output = transformCode(input)
      expect(output).toContain('display: "flex"')
      expect(output).toContain('alignItems: "center"')
      expect(output).toContain('justifyContent: "space-between"')
    })
  })

  describe('complex examples', () => {
    it('transforms complete component style', () => {
      const input = `
        <Card sx={{
          bg: 'background',
          p: 4,
          borderRadius: 'lg',
          boxShadow: 'md',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          Content
        </Card>
      `
      const output = transformCode(input)
      expect(output).toContain('background: "var(--duro-color-background)"')
      expect(output).toContain('padding: "var(--duro-space-4)"')
      expect(output).toContain('borderRadius: "var(--duro-radius-lg)"')
      expect(output).toContain('boxShadow: "var(--duro-shadow-md)"')
      expect(output).toContain('display: "flex"')
      expect(output).toContain('flexDirection: "column"')
      expect(output).toContain('gap: "var(--duro-space-2)"')
    })

    it('converts sx to style attribute', () => {
      const input = `<Box sx={{ bg: 'primary' }} />`
      const output = transformCode(input)
      expect(output).toContain('style=')
      expect(output).not.toContain('sx=')
    })
  })
})
