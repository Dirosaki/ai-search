import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useStore } from '@/store'

type DeleteTaskModalProps = {
  id: string
}

export function DeleteTaskModal({ id }: DeleteTaskModalProps) {
  const closeModal = useStore((state) => state.modal.closeModal)
  const deleteTask = useStore((state) => state.tasks.deleteTask)

  const handleDelete = () => {
    deleteTask(id)
    closeModal('delete-task')
  }

  return (
    <DialogContent className="flex max-h-full flex-col sm:max-w-md" closable>
      <DialogHeader>
        <DialogTitle>Excluir tarefa</DialogTitle>
        <DialogDescription>
          A exclusão da tarefa é algo irreversível. Deseja continuar?
        </DialogDescription>
      </DialogHeader>

      <DialogFooter className="flex-row space-x-2">
        <DialogClose asChild>
          <Button className="w-full" type="button" variant="secondary">
            Não, cancelar
          </Button>
        </DialogClose>
        <Button className="w-full" type="button" onClick={handleDelete}>
          Sim, excluir
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
