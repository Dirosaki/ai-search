'use client'

import { Inbox } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { startTransition, useActionState } from 'react'

import { searchAction } from '@/actions/search-action'
import { AnimatedInput } from '@/components/ui/animated-input'

import { SuggestionList } from './suggestion-list'

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

export function SearchForm() {
  const [actionState, formAction] = useActionState(searchAction, null)

  const handleResetState = () => {
    startTransition(() => formAction(null))
  }

  return (
    <form action={formAction} className="mx-auto flex flex-1 flex-col">
      <AnimatedInput
        aria-label="Campo de pesquisa"
        className="mt-[-22px] sm:-mt-6"
        name="search"
        placeholder="O que deseja encontrar?"
        placeholders={placeholders}
        reset={handleResetState}
      />

      <div
        className="flex max-h-[calc(100dvh-(160px+32px))] w-full flex-1 py-4 sm:max-h-[calc(100dvh-(160px+48px))]
          lg:max-h-[calc(100dvh-(160px+72px))]"
      >
        <AnimatePresence mode="wait">
          {Array.isArray(actionState) && <SuggestionList suggestions={actionState} />}
          {!actionState && (
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="mx-auto flex flex-col items-center justify-center gap-4 text-center"
              exit={{ y: 15, opacity: 0 }}
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Inbox className="size-8 md:size-10" />
              <p className="md:text-xl">Faça uma busca para começar</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}
