import {
  ChatRoomContainer,
  ChatRoomContainerHeader,
} from "./ChatRoomContainer";
import { ChatRoom, ChatRoomInnerDiv } from "./ChatRoom";
import { useEffect } from "react";
import { getAllChatRooms } from "api/chatApi.ts";
import { useChatRoomStore } from "../../stores";

export default function ChatPage() {
  const { chatRooms, setChatRooms } = useChatRoomStore();

  useEffect(() => {
    const getChatRooms = async () => {
      const rooms = await getAllChatRooms();
      setChatRooms(rooms);
    };

    getChatRooms();
  }, []);

  const handleClickChatRoom = (chatRoomId: string) => {
    alert(`ChatRoomId: ${chatRoomId}`);
  };

  return (
    <ChatRoomContainer>
      <ChatRoomContainerHeader>
        <ChatRoomInnerDiv $widthPercent={10}>방 번호</ChatRoomInnerDiv>
        <ChatRoomInnerDiv $widthPercent={50}>방 제목</ChatRoomInnerDiv>
        <ChatRoomInnerDiv $widthPercent={10}>참여자 수</ChatRoomInnerDiv>
        <ChatRoomInnerDiv $widthPercent={20}>방 생성 날짜</ChatRoomInnerDiv>
        <ChatRoomInnerDiv $widthPercent={10}>방장</ChatRoomInnerDiv>
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
          <ChatRoomInnerDiv $widthPercent={50}>
            {chatRoom.title}
          </ChatRoomInnerDiv>
          <ChatRoomInnerDiv $widthPercent={10}>
            {chatRoom.users.length}
          </ChatRoomInnerDiv>
          <ChatRoomInnerDiv $widthPercent={20}>
            {chatRoom.createdAt}
          </ChatRoomInnerDiv>
          <ChatRoomInnerDiv $widthPercent={10}>
            {chatRoom.owner.id}
          </ChatRoomInnerDiv>
        </ChatRoom>
      ))}
    </ChatRoomContainer>
  );
}
