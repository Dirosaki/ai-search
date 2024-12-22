import { StateCreator } from 'zustand'

import { ModalSlice } from './slices/modal-slice'
import { TaskSlice } from './slices/task-slice'

export type Store = {
  tasks: TaskSlice
  modal: ModalSlice
}

export type StoreSlice<TSlice> = StateCreator<Store, [['zustand/immer', never]], [], TSlice>
