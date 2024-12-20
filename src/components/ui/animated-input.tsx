'use client'

import { Loader2, Search, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { ChangeEvent, ComponentProps, useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

import { cn } from '@/utils/cn'

import { Input } from './input'

type AnimatedInputProps = ComponentProps<typeof Input> & {
  placeholders?: string[]
  isClearable?: boolean
}

export function AnimatedInput({
  className,
  placeholders,
  isClearable = true,
  ...props
}: AnimatedInputProps) {
  const { pending: isPending } = useFormStatus()

  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [value, setValue] = useState('')

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (placeholders?.length) {
      interval = setInterval(() => {
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [placeholders])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleClear = () => setValue('')

  return (
    <div
      className={cn(
        `relative mx-auto flex h-11 w-full max-w-screen-sm items-center gap-2 rounded-md bg-background
        sm:h-12`,
        className
      )}
    >
      <Search className="absolute left-3 top-3.5 sm:top-4" size={16} absoluteStrokeWidth />
      <Input
        disabled={isPending}
        value={value}
        className={cn('size-full pb-px pl-9 pr-10 text-sm sm:text-base', {
          'placeholder:text-transparent': placeholders?.length,
        })}
        onChange={handleChange}
        {...props}
      />

      <AnimatePresence>
        {!!placeholders?.length && value.length === 0 && (
          <motion.span
            key={placeholderIndex}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-none absolute left-9 text-nowrap text-sm text-muted-foreground sm:text-base"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
          >
            {placeholders[placeholderIndex]}
          </motion.span>
        )}

        {isClearable && value.length > 0 && !isPending && (
          <motion.button
            animate={{ opacity: 1, x: 0 }}
            aria-label="Limpar campo"
            exit={{ opacity: 0, x: -10 }}
            initial={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.35 }}
            type="button"
            className="absolute right-1 top-1.5 flex size-8 items-center justify-center rounded-md ring-offset-background
              transition-clear-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              focus-visible:ring-offset-2 sm:top-2"
            onClick={handleClear}
          >
            <X size={16} absoluteStrokeWidth />
          </motion.button>
        )}

        {isPending && (
          <motion.span
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-3 top-3.5 sm:top-4"
            exit={{ opacity: 0, x: -10 }}
            initial={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.35 }}
          >
            <Loader2 className="animate-spin duration-700" size={16} absoluteStrokeWidth />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
