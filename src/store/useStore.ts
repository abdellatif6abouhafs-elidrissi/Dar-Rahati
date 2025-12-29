import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Locale } from '@/types'

interface StoreState {
  locale: Locale
  setLocale: (locale: Locale) => void
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      locale: 'ar',
      setLocale: (locale) => set({ locale }),
      isMenuOpen: false,
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      closeMenu: () => set({ isMenuOpen: false }),
    }),
    {
      name: 'dar-rahati-store',
      partialize: (state) => ({ locale: state.locale }),
    }
  )
)

