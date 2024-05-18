import {
  ChatRoomContainer,
  ChatRoomContainerHeader,
} from "./ChatRoomContainer";
import { ChatRoom, ChatRoomInnerDiv } from "./ChatRoom";
import { useEffect } from "react";
import { getAllChatRooms, subscribeToRoom } from "api/chatApi.ts";
import {
  useChatMessagesStore,
  useChatRoomsStore,
  useChatStore,
  usePeerConnectionStore,
  useUserStore,
} from "stores";
import { ChatScreen } from "components/chat";

export default function ChatListPage() {
  const { user } = useUserStore();
  const { peerConnections } = usePeerConnectionStore();
  const { chatRooms, setChatRooms } = useChatRoomsStore();
  const { setChat } = useChatStore();
  const { setMessages, addMessage } = useChatMessagesStore();

  useEffect(() => {
    const getChatRooms = async () => {
      const rooms = await getAllChatRooms();
      setChatRooms(rooms);
    };

    getChatRooms();
  }, []);

  const handleClickChatRoom = (chatRoomId: string) => {
    if (!user) {
      throw new Error("User not found");
    }

    const room = chatRooms.find((room) => room.id === chatRoomId);
    if (!room) {
      throw new Error("Chat room not found");
    }

    subscribeToRoom(chatRoomId, user.id, peerConnections, addMessage);
    setMessages([]);
    setChat(room);
  };

  return (
    <ChatRoomContainer>
      <ChatScreen />
      <ChatRoomContainerHeader>
        <ChatRoomInnerDiv $widthPercent={10}>방 번호</ChatRoomInnerDiv>
        <ChatRoomInnerDiv $widthPercent={55}>방 제목</ChatRoomInnerDiv>
        <ChatRoomInnerDiv $widthPercent={20}>방 생성 날짜</ChatRoomInnerDiv>
        <ChatRoomInnerDiv $widthPercent={15}>방장</ChatRoomInnerDiv>
      </ChatRoomContainerHeader>
      {chatRooms.map((chatRoom) => (
        <ChatRoom
          onClick={() => {
            handleClickChatRoom(chatRoom.id);
          }}
          key={chatRoom.id}
        >
          <ChatRoomInnerDiv $widthPercent={10} className={"chat-room-id"}>
            {chatRoom.id}
          </ChatRoomInnerDiv>
          <ChatRoomInnerDiv $widthPercent={55}>
            {chatRoom.title}
          </ChatRoomInnerDiv>
          <ChatRoomInnerDiv $widthPercent={20}>
            {chatRoom.createdAt}
          </ChatRoomInnerDiv>
          <ChatRoomInnerDiv $widthPercent={15}>
            {chatRoom.owner.id}
          </ChatRoomInnerDiv>
        </ChatRoom>
      ))}
    </ChatRoomContainer>
  );
}
