import { create } from "zustand";

export interface ChatMessageData {
  text: string;
  isOwner: boolean;
}

interface ChatMessagesState {
  messages: ChatMessageData[];
  setMessages: (messages: ChatMessageData[]) => void;
  addMessage: (message: ChatMessageData) => void;
}

export const useChatMessagesStore = create<ChatMessagesState>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
}));
