import { create } from "zustand";

interface User {
  id: string;
}

interface LoginState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<LoginState>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));
