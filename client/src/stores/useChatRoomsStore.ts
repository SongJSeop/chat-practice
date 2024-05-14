import { create } from "zustand";
import { User } from "./useUserStore.ts";

export interface ChatRoomData {
  id: string;
  title: string;
  users: User[];
  createdAt: string;
  owner: User;
}

interface ChatRoomState {
  chatRooms: ChatRoomData[];
  setChatRooms: (chatRooms: ChatRoomData[]) => void;
  appendChatRoom: (chatRoom: ChatRoomData) => void;
}

export const useChatRoomsStore = create<ChatRoomState>((set) => ({
  chatRooms: [],
  setChatRooms: (chatRooms) => set((state) => ({ ...state, chatRooms })),
  appendChatRoom: (chatRoom) =>
    set((state) => ({ ...state, chatRooms: [...state.chatRooms, chatRoom] })),
}));
