import { StoreSlice } from '../store'

export type TaskProps = {
  id: string
  title: string
  checked: boolean
}

type TaskState = {
  data: TaskProps[]
}

type TaskActions = {
  createTask: (task: TaskProps) => void
  updateStatus: (id: string, status: boolean) => void
  updateTitle: (id: string, title: string) => void
  deleteTask: (id: string) => void
}

export type TaskSlice = TaskActions & TaskState

export const createTaskSlice: StoreSlice<TaskSlice> = (set) => ({
  data: [],
  createTask: (task) => {
    set((state) => {
      state.tasks.data.push(task)
    })
  },
  updateStatus: (id, status) => {
    set((state) => {
      const index = state.tasks.data.findIndex((task) => task.id === id)
      if (index !== -1) {
        state.tasks.data[index].checked = status
      }
    })
  },
  updateTitle: (id, title) => {
    set((state) => {
      const index = state.tasks.data.findIndex((task) => task.id === id)
      if (index !== -1) {
        state.tasks.data[index].title = title
      }
    })
  },
  deleteTask: (id) => {
    set((state) => {
      state.tasks.data = state.tasks.data.filter((task) => task.id !== id)
    })
  },
})
