import { create } from "zustand";

export interface User {
  id: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));
