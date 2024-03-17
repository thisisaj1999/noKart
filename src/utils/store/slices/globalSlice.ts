import { create } from 'zustand'

interface IGlobalSlice {
  isLoggedIn : boolean,
  isSidebarCollapsed : boolean,
  setIsLoggedIn : (isLoggedIn: boolean) => void, 
  setIsSidebarCollapsed : (isSidebarCollapsed: boolean) => void, 
}

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isLoggedIn : true,
  isSidebarCollapsed : true,
  setIsLoggedIn : (isLoggedIn) => set((state) => ({...state, isLoggedIn})), 
  setIsSidebarCollapsed : (isSidebarCollapsed) => set((state) => ({...state, isSidebarCollapsed})), 
}))