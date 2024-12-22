'use client'

import { CornerDownLeft, Filter, Inbox, Loader2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useActionState, useEffect, useState } from 'react'

import { createTaskAction } from '@/actions/create-task-action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useStore } from '@/store'

import { TaskList } from './task-list'

export function TaskForm() {
  const [value, setValue] = useState('')
  const [actionState, formAction, isPending] = useActionState(createTaskAction, null)
  const tasks = useStore((state) => state.tasks.data)
  const createTask = useStore((state) => state.tasks.createTask)

  useEffect(() => {
    if (!actionState?.data) return

    createTask(actionState.data)
    setValue('')
  }, [actionState?.data, createTask])

  return (
    <div className="mx-auto flex flex-1 flex-col">
      <form action={formAction}>
        <div
          className="relative mx-auto mt-[-22px] flex h-11 w-full max-w-screen-sm items-center gap-2 rounded-md
            bg-background sm:-mt-6 sm:h-12"
        >
          <Input
            aria-label="Nome da tarefa"
            className="peer size-full pb-px pr-10 text-sm sm:text-base"
            disabled={isPending}
            name="title"
            placeholder="Qual é a sua próxima tarefa?"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          {!!value.length && !isPending && (
            <motion.button
              animate={{ opacity: 1, x: 0 }}
              aria-label="Limpar campo"
              exit={{ opacity: 0, x: -10 }}
              initial={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.35 }}
              type="submit"
              className="absolute right-1 top-1.5 flex size-8 items-center justify-center rounded-md ring-offset-background
                transition-clear-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                focus-visible:ring-offset-2 sm:top-2"
            >
              <CornerDownLeft size={16} absoluteStrokeWidth />
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
        </div>
      </form>

      <div
        className="flex max-h-[calc(100dvh-(160px+32px))] w-full flex-1 py-4 sm:max-h-[calc(100dvh-(160px+48px))]
          lg:max-h-[calc(100dvh-(160px+72px))]"
      >
        <AnimatePresence>
          {!!tasks.length && <TaskList tasks={tasks} />}

          {!tasks.length && (
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="mx-auto flex flex-col items-center justify-center gap-4 text-center"
              exit={{ y: 15, opacity: 0 }}
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Inbox className="size-8 md:size-10" />
              <p className="md:text-xl">Comece adicionando uma tarefa</p>
            </motion.div>
          )}
        </AnimatePresence>

        {!!tasks.length && (
          <Button
            className="absolute bottom-4 right-4 rounded-full"
            size="icon"
            type="button"
            asChild
          >
            <motion.button
              animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, x: 12, opacity: 0, scale: 0.5 }}
              initial={{ y: 12, x: 12, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <Filter />
            </motion.button>
          </Button>
        )}
      </div>
    </div>
  )
}
