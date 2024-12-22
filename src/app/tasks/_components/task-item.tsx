'use client'

import { Edit, Trash2 } from 'lucide-react'
import { motion } from 'motion/react'
import { memo } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useStore } from '@/store'
import { TaskProps } from '@/store/slices/task-slice'
import { cn } from '@/utils/cn'

import { DeleteTaskModal } from './delete-task-modal'
import { UpdateTaskModal } from './update-task-modal'

type TaskItemProps = {
  task: TaskProps
}

function TaskItemBase({ task }: TaskItemProps) {
  const updateStatus = useStore((state) => state.tasks.updateStatus)

  const openModal = useStore((state) => state.modal.openModal)

  const handleOpenDeleteModal = () => {
    openModal({
      id: 'delete-task',
      children: <DeleteTaskModal id={task.id} />,
    })
  }

  const handleOpenUpdateModal = () => {
    openModal({
      id: 'update-task',
      children: <UpdateTaskModal task={task} />,
    })
  }

  return (
    <motion.li
      key={task.id}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full items-center overflow-hidden rounded-md border p-4 pr-3"
      exit={{ opacity: 0, y: -15 }}
      initial={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      layout
    >
      <Checkbox
        checked={task.checked}
        id={task.id}
        onCheckedChange={(checkedState) => updateStatus(task.id, !!checkedState)}
      />
      <Label
        htmlFor={task.id}
        className={cn(
          'relative ml-2 flex h-full cursor-pointer items-center',
          task.checked && 'text-muted-foreground line-through'
        )}
      >
        {task.title}
      </Label>

      <Button
        className="ml-auto size-8 text-foreground hover:text-foreground/80"
        size="icon"
        type="button"
        variant="link"
        onClick={handleOpenUpdateModal}
      >
        <Edit className="size-4 sm:size-6" />
      </Button>
      <Button
        className="ml-1 size-8 text-foreground hover:text-foreground/80"
        size="icon"
        type="button"
        variant="link"
        onClick={handleOpenDeleteModal}
      >
        <Trash2 className="size-4 sm:size-6" />
      </Button>
    </motion.li>
  )
}

export const TaskItem = memo(TaskItemBase)
