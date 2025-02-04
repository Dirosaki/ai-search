'use client'

import { Inbox } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { startTransition, useActionState } from 'react'

import { searchAction } from '@/actions/search-action'
import { AnimatedSearchInput } from '@/app/search/components/animated-search-input'

import { SuggestionList } from './suggestion-list'

export function SearchForm() {
  const [actionState, formAction] = useActionState(searchAction, null)

  const handleResetState = () => {
    startTransition(() => formAction(null))
  }

  return (
    <form action={formAction} autoComplete="off" className="mx-auto flex flex-1 flex-col">
      <AnimatedSearchInput onReset={handleResetState} />

      <div
        className="flex max-h-[calc(100dvh-(160px+32px))] w-full flex-1 py-4 sm:max-h-[calc(100dvh-(160px+48px))]
          lg:max-h-[calc(100dvh-(160px+72px))]"
      >
        <AnimatePresence mode="wait">
          {actionState?.data && <SuggestionList suggestions={actionState.data} />}
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
