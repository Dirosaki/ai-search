import { Label } from '@radix-ui/react-label'
import { AnimatePresence, motion } from 'motion/react'
import { useActionState, useEffect } from 'react'

import { updateTaskAction } from '@/actions/update-task-action'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useStore } from '@/store'
import { TaskProps } from '@/store/slices/task-slice'

type UpdateTaskModalProps = {
  task: TaskProps
}

export function UpdateTaskModal({ task }: UpdateTaskModalProps) {
  const [actionState, formAction, isPending] = useActionState(updateTaskAction, null)
  const updateTitle = useStore((state) => state.tasks.updateTitle)
  const closeModal = useStore((state) => state.modal.closeModal)

  useEffect(() => {
    if (!actionState?.data) return

    updateTitle(actionState.data.id, actionState.data.title)
    closeModal('update-task')
  }, [actionState?.data, updateTitle, closeModal])

  return (
    <DialogContent className="flex max-h-full flex-col sm:max-w-md" closable={!isPending}>
      <DialogHeader>
        <DialogTitle>Renomear tarefa</DialogTitle>
        <DialogDescription>Altere o nome da tarefa como desejar.</DialogDescription>
      </DialogHeader>
      <form action={formAction} autoComplete="off" id="update-task">
        <div className="space-y-2">
          <Label htmlFor="title">Título da tarefa</Label>
          <Input
            defaultValue={task.title}
            name="title"
            placeholder="Digite o título da tarefa"
            autoFocus
          />
          <AnimatePresence>
            {actionState?.fieldErrors.title && (
              <motion.span
                animate={{ height: 'auto', opacity: 1 }}
                aria-live="polite"
                className="inline-flex text-sm text-red-500"
                exit={{ height: 0, opacity: 0 }}
                initial={{ height: 0, opacity: 0 }}
                role="alert"
                transition={{
                  duration: 0.25,
                }}
              >
                {actionState.fieldErrors.title[0]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <Input defaultValue={task.id} name="id" type="hidden" />
      </form>
      <DialogFooter className="flex-row space-x-2">
        <DialogClose asChild>
          <Button className="w-full" disabled={isPending} type="button" variant="secondary">
            Cancelar
          </Button>
        </DialogClose>
        <Button className="w-full" disabled={isPending} form="update-task" type="submit">
          Salvar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
