'use client'

import { Loader2, Search, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

import { Input } from '@/components/ui/input'
import { useTextAnimation } from '@/hooks/use-text-animation'

type AnimatedSearchInputProps = {
  onReset: () => void
}

const placeholders = [
  'Pesquise por algo incrível...',
  'Busque e descubra...',
  'O que você está procurando hoje?',
  'O que deseja encontrar?',
  'Procure o que quiser!',
  'Qual é sua próxima descoberta?',
  'Está procurando algo especial?',
  'Tudo começa com uma busca...',
]

export function AnimatedSearchInput({ onReset }: AnimatedSearchInputProps) {
  const { pending: isPending } = useFormStatus()
  const [value, setValue] = useState('')
  const animatedPlaceholder = useTextAnimation({ placeholders })

  const handleClear = () => {
    onReset()
    setValue('')
  }

  return (
    <div
      className="relative mx-auto mt-[-22px] flex min-h-11 w-full max-w-screen-sm items-center gap-2 rounded-md
        bg-background sm:-mt-6 sm:h-12"
    >
      <Search className="absolute left-3 top-3.5 sm:top-4" size={16} absoluteStrokeWidth />

      <Input
        aria-label="Campo de pesquisa"
        className="size-full pb-px pl-9 pr-10 text-sm placeholder:text-transparent sm:text-base"
        disabled={isPending}
        name="search"
        placeholder="O que deseja encontrar?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <AnimatePresence>
        {!value.length && (
          <motion.span
            key={animatedPlaceholder}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-none absolute left-9 text-nowrap text-sm text-muted-foreground sm:text-base"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            {animatedPlaceholder}
          </motion.span>
        )}

        {!!value.length && !isPending && (
          <motion.button
            animate={{ opacity: 1, x: 0 }}
            aria-label="Limpar campo"
            exit={{ opacity: 0, x: -10 }}
            initial={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.35 }}
            type="reset"
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
