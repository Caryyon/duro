/**
 * Dialog Component
 *
 * A modal dialog that overlays the page.
 */

import { createContext, useContext, useState, useEffect, type FC, type ReactNode, type HTMLAttributes, type ButtonHTMLAttributes } from 'react'

interface DialogContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined)

const useDialogContext = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('Dialog compound components must be used within Dialog')
  }
  return context
}

export interface DialogProps {
  /** Children elements */
  children: ReactNode
  /** Controlled open state */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
}

export interface DialogTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
  /** Show close button */
  showClose?: boolean
}

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface DialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

export interface DialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Children elements */
  children: ReactNode
  /** Additional CSS class names */
  className?: string
}

/**
 * Dialog container component
 */
export const Dialog: FC<DialogProps> = ({ children, open, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false)

  const isOpen = open !== undefined ? open : internalOpen
  const setIsOpen = (newOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

/**
 * DialogTrigger component
 */
export const DialogTrigger: FC<DialogTriggerProps> = ({ children, className, ...props }) => {
  const { setIsOpen } = useDialogContext()

  const classes = ['duro-dialog-trigger', className].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      onClick={() => setIsOpen(true)}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * DialogContent component
 */
export const DialogContent: FC<DialogContentProps> = ({
  children,
  className,
  showClose = true,
  ...props
}) => {
  const { isOpen, setIsOpen } = useDialogContext()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) {
    return null
  }

  const classes = ['duro-dialog-content', className].filter(Boolean).join(' ')

  return (
    <>
      <div
        className="duro-dialog-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div className={classes} role="dialog" aria-modal="true" {...props}>
        {showClose && (
          <button
            className="duro-dialog-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close dialog"
            type="button"
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </>
  )
}

/**
 * DialogHeader component
 */
export const DialogHeader: FC<DialogHeaderProps> = ({ children, className, ...props }) => {
  const classes = ['duro-dialog-header', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/**
 * DialogFooter component
 */
export const DialogFooter: FC<DialogFooterProps> = ({ children, className, ...props }) => {
  const classes = ['duro-dialog-footer', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/**
 * DialogTitle component
 */
export const DialogTitle: FC<DialogTitleProps> = ({ children, className, ...props }) => {
  const classes = ['duro-dialog-title', className].filter(Boolean).join(' ')

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  )
}

/**
 * DialogDescription component
 */
export const DialogDescription: FC<DialogDescriptionProps> = ({ children, className, ...props }) => {
  const classes = ['duro-dialog-description', className].filter(Boolean).join(' ')

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
