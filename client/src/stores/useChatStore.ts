import { create } from "zustand";

export interface Chat {
  roomId: string;
}

interface ChatState {
  chat: Chat | null;
  setChat: (chat: Chat) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chat: null,
  setChat: (chat) => set((state) => ({ ...state, chat })),
}));
