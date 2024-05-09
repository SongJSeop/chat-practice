import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import {
  ChatRoomContainer,
  ChatRoomContainerHeader,
  ChatRoom,
  ChatRoomInnerDiv,
} from "components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChatRoomContainer>
      <ChatRoomContainerHeader>
        <ChatRoomInnerDiv widthPercent={10} textAlign={"center"}>
          방 번호
        </ChatRoomInnerDiv>
        <ChatRoomInnerDiv widthPercent={50} textAlign={"center"}>
          방 제목
        </ChatRoomInnerDiv>
        <ChatRoomInnerDiv widthPercent={10} textAlign={"center"}>
          참여자 수
        </ChatRoomInnerDiv>
        <ChatRoomInnerDiv widthPercent={20} textAlign={"center"}>
          방 생성 날짜
        </ChatRoomInnerDiv>
        <ChatRoomInnerDiv widthPercent={10} textAlign={"center"}>
          방장
        </ChatRoomInnerDiv>
      </ChatRoomContainerHeader>
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
    </ChatRoomContainer>
  </React.StrictMode>,
);
