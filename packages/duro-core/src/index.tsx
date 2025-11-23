/**
 * Duro Design System
 *
 * A durable, SSR-compatible design system built on CSS custom properties,
 * container queries, and modern React patterns.
 */

// Provider
export { DuroProvider, useDuroTheme, getServerThemeCSS } from './DuroProvider'
export type { DuroProviderProps } from './DuroProvider'

// Theme
export { duroTheme, themeVar, generateThemeCSS, commonSections, createSection } from './theme'
export type {
  DuroTheme,
  ColorScale,
  SpaceScale,
  FontScale,
  FontSizeScale,
  SectionDefinition,
  SectionLayout,
  SectionVariant,
} from './theme'

// Components
export { Button } from './Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button'

export { ButtonGroup } from './ButtonGroup'
export type { ButtonGroupProps, ButtonGroupOrientation, ButtonGroupSize } from './ButtonGroup'

export { Box } from './Box'
export type { BoxProps } from './Box'

export {
  Section,
  Hero,
  Dashboard,
  Stack,
  Grid,
  Sidebar,
  Cluster,
} from './Section'
export type { SectionProps } from './Section'

// Card
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
export type { CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps, CardFooterJustify } from './Card'

// Form Components
export { Label } from './Label'
export type { LabelProps } from './Label'

export { Input } from './Input'
export type { InputProps } from './Input'

export { Textarea } from './Textarea'
export type { TextareaProps, TextareaResize } from './Textarea'

export { Checkbox } from './Checkbox'
export type { CheckboxProps } from './Checkbox'

export { Switch } from './Switch'
export type { SwitchProps, SwitchSize } from './Switch'

// Display Components
export { Badge } from './Badge'
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge'

export { Separator } from './Separator'
export type { SeparatorProps, SeparatorOrientation } from './Separator'

export { Avatar, AvatarImage, AvatarFallback } from './Avatar'
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps, AvatarSize } from './Avatar'

export { Skeleton } from './Skeleton'
export type { SkeletonProps } from './Skeleton'

// Feedback Components
export { Alert, AlertTitle, AlertDescription } from './Alert'
export type { AlertProps, AlertTitleProps, AlertDescriptionProps, AlertVariant } from './Alert'

export { Progress } from './Progress'
export type { ProgressProps, ProgressSize, ProgressVariant } from './Progress'

export { Tooltip } from './Tooltip'
export type { TooltipProps, TooltipPosition } from './Tooltip'

// Interactive Components
export { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from './Tabs'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps, AccordionType } from './Accordion'

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from './Dialog'
export type { DialogProps, DialogTriggerProps, DialogContentProps, DialogHeaderProps, DialogFooterProps, DialogTitleProps, DialogDescriptionProps } from './Dialog'

// Text Components
export { Text } from './Text'
export type { TextProps, TextVariant, TextSize, TextWeight, TextAs } from './Text'

export { Heading } from './Heading'
export type { HeadingProps, HeadingLevel, HeadingVariant } from './Heading'

export { Paragraph } from './Paragraph'
export type { ParagraphProps, ParagraphSize, ParagraphVariant } from './Paragraph'

// HUD Components - Panels
export { HudPanel } from './HudPanel'
export type { HudPanelProps } from './HudPanel'

// HUD Components - Data Display
export { StatBlock } from './StatBlock'
export type { StatBlockProps } from './StatBlock'

export { DataRow } from './DataRow'
export type { DataRowProps } from './DataRow'

export { TerminalLine } from './TerminalLine'
export type { TerminalLineProps, TerminalLineType } from './TerminalLine'

// HUD Components - Visualizations
export { RadarDisplay } from './RadarDisplay'
export type { RadarDisplayProps } from './RadarDisplay'

export { Crosshair } from './Crosshair'
export type { CrosshairProps } from './Crosshair'

export { WaveformDisplay } from './WaveformDisplay'
export type { WaveformDisplayProps } from './WaveformDisplay'

// HUD Components - Charts
export { BarChart } from './BarChart'
export type { BarChartProps, BarChartDataItem } from './BarChart'

export { DataGraph } from './DataGraph'
export type { DataGraphProps } from './DataGraph'

export { GaugeMeter } from './GaugeMeter'
export type { GaugeMeterProps } from './GaugeMeter'

export { PulseMeter } from './PulseMeter'
export type { PulseMeterProps } from './PulseMeter'

// HUD Components - Utility
export { StatusIndicator } from './StatusIndicator'
export type { StatusIndicatorProps, StatusIndicatorStatus } from './StatusIndicator'

export { SignalStrength } from './SignalStrength'
export type { SignalStrengthProps } from './SignalStrength'

export { BinaryDisplay } from './BinaryDisplay'
export type { BinaryDisplayProps } from './BinaryDisplay'

export { HexDisplay } from './HexDisplay'
export type { HexDisplayProps } from './HexDisplay'

// HUD Components - Decorative
export { DecorativeLine } from './DecorativeLine'
export type { DecorativeLineProps } from './DecorativeLine'

export { GridPattern } from './GridPattern'
export type { GridPatternProps } from './GridPattern'

export { CircuitNode } from './CircuitNode'
export type { CircuitNodeProps } from './CircuitNode'

export { NodeNetwork } from './NodeNetwork'
export type { NodeNetworkProps, NetworkNode } from './NodeNetwork'
