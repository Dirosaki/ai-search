'use client'

import { useEffect, useState } from 'react'

export const useTextAnimation = ({ placeholders }: { placeholders: string[] }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [placeholders])

  return placeholders[index]
}
