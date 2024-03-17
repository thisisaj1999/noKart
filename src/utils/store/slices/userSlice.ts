import { create } from 'zustand'

interface IUserSlice {
  id : string,
  name : string,
  email : string,
  role : string,
  setId : (id: string) => void,
  setName : (name: string) => void,
  setEmail : (email: string) => void,
  setRole : (role: string) => void,
}

export const useUserStore = create<IUserSlice>()((set) => ({
  id : "",
  name : "",
  email : "",
  role : "",
  setId : (id) => set((state) => ({...state, id })),
  setName : (name) => set((state) => ({...state, name })),
  setEmail : (email) => set((state) => ({...state, email })),
  setRole : (role) => set((state) => ({...state, role })),
}))