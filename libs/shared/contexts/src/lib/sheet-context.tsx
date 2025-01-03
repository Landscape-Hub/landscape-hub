import React, { createContext, useState, useContext, ReactNode } from 'react'

interface SheetContextType {
  isOpen: boolean
  openSheet: (content: ReactNode, title?: string, description?: string) => void
  closeSheet: () => void
  sheetContent: ReactNode | null
  sheetTitle: string | null
  sheetDescription: string | null
}

const SheetContext = createContext<SheetContextType | undefined>(undefined)

export function SheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [sheetContent, setSheetContent] = useState<ReactNode | null>(null)
  const [sheetTitle, setSheetTitle] = useState<string | null>(null)
  const [sheetDescription, setSheetDescription] = useState<string | null>(null)

  const openSheet = (content: ReactNode, title?: string, description?: string) => {
    setSheetContent(content)
    setSheetTitle(title || null)
    setSheetDescription(description || null)
    setIsOpen(true)
  }

  const closeSheet = () => {
    setIsOpen(false)
    setSheetContent(null)
    setSheetTitle(null)
    setSheetDescription(null)
  }

  return (
    <SheetContext.Provider value={{ isOpen, openSheet, closeSheet, sheetContent, sheetTitle, sheetDescription }}>
      {children}
    </SheetContext.Provider>
  )
}

export const useSheet = () => {
  const context = useContext(SheetContext)
  if (context === undefined) {
    throw new Error('useSheet must be used within a SheetProvider')
  }
  return context
}
