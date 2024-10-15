import { create } from 'zustand';

type ThemeStore = {
  theme: boolean;
  setTheme: (theme: boolean) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: true,
  setTheme: (theme: boolean) => set({ theme }),
}));
