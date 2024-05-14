import { create } from "zustand";
import { ChatRoomData } from "./useChatRoomsStore.ts";

interface ChatState {
  chat: ChatRoomData | null;
  setChat: (chat: ChatRoomData | null) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chat: null,
  setChat: (chat) => set((state) => ({ ...state, chat })),
}));
