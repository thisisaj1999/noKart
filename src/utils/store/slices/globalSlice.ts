import { create } from 'zustand'

interface IGlobalSlice {
  isLoggedIn : boolean,
  isSidebarCollapsed : boolean,
  currentPage: string,
  setIsLoggedIn : (isLoggedIn: boolean) => void, 
  setIsSidebarCollapsed : (isSidebarCollapsed: boolean) => void, 
  setCurrentPage : (currentPage: string) => void, 
}

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isLoggedIn : true,
  isSidebarCollapsed : true,
  currentPage: "",
  setIsLoggedIn : (isLoggedIn) => set((state) => ({...state, isLoggedIn})), 
  setIsSidebarCollapsed : (isSidebarCollapsed) => set((state) => ({...state, isSidebarCollapsed})), 
  setCurrentPage: (currentPage) => set((state) => ({...state, currentPage}))
}))