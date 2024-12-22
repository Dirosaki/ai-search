import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { createModalSlice } from './slices/modal-slice'
import { createTaskSlice } from './slices/task-slice'
import { Store } from './store'

export const useStore = create<Store>()(
  immer((...params) => ({
    tasks: createTaskSlice(...params),
    modal: createModalSlice(...params),
  }))
)
