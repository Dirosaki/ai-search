import { motion } from 'motion/react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { TaskProps } from '@/store/slices/task-slice'

import { TaskItem } from './task-item'

type TaskListProps = {
  tasks: TaskProps[]
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ScrollArea className="w-full rounded-md" type="hover">
      <motion.ul
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto flex w-full max-w-screen-md flex-1 flex-col gap-4 scrollbar-thin"
        exit={{ y: 15, opacity: 0 }}
        initial={{ y: -15, opacity: 0 }}
        transition={{ duration: 0.25 }}
        layout
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </motion.ul>
    </ScrollArea>
  )
}
