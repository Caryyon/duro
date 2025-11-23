/**
 * NodeNetwork Component
 *
 * A HUD-styled network topology visualization.
 */

import type { FC, HTMLAttributes } from 'react'

export interface NetworkNode {
  /** X coordinate */
  x: number
  /** Y coordinate */
  y: number
  /** Whether the node is active */
  active?: boolean
}

export interface NodeNetworkProps extends HTMLAttributes<HTMLDivElement> {
  /** Width of the visualization */
  width?: number
  /** Height of the visualization */
  height?: number
  /** Array of nodes */
  nodes?: NetworkNode[]
  /** Array of connections as [fromIndex, toIndex] pairs */
  connections?: [number, number][]
  /** Additional CSS class names */
  className?: string
}

const DEFAULT_NODES: NetworkNode[] = [
  { x: 30, y: 30, active: true },
  { x: 100, y: 25, active: true },
  { x: 170, y: 35, active: false },
  { x: 50, y: 90, active: true },
  { x: 130, y: 95, active: true },
]

const DEFAULT_CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [3, 4]
]

/**
 * NodeNetwork component - Network topology visualization
 */
export const NodeNetwork: FC<NodeNetworkProps> = ({
  width = 200,
  height = 120,
  nodes = DEFAULT_NODES,
  connections = DEFAULT_CONNECTIONS,
  className,
  ...props
}) => {
  const classes = [
    'duro-node-network',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <svg width={width} height={height}>
        {/* Connections */}
        {connections.map(([from, to], i) => {
          const fromNode = nodes[from]
          const toNode = nodes[to]
          if (!fromNode || !toNode) return null
          return (
            <line
              key={i}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="var(--duro-color-secondary)"
              strokeWidth="1"
              strokeDasharray={fromNode.active && toNode.active ? 'none' : '4 2'}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <rect
              x={node.x - 8}
              y={node.y - 8}
              width="16"
              height="16"
              fill={node.active ? 'var(--duro-color-text)' : 'none'}
              stroke="var(--duro-color-text)"
              strokeWidth="1"
            />
            {node.active && (
              <rect
                x={node.x - 4}
                y={node.y - 4}
                width="8"
                height="8"
                fill="var(--duro-color-background)"
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}
