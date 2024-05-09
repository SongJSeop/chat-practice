import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import {
  ChatRoomContainer,
  ChatRoomContainerHeader,
  ChatRoom,
} from "components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChatRoomContainer>
      <ChatRoomContainerHeader />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
    </ChatRoomContainer>
  </React.StrictMode>,
);
