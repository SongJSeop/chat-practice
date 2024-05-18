import { useChatMessagesStore, useChatStore, useUserStore } from "stores";
import styled from "styled-components";
import { sendChat } from "../../api/chatApi.ts";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  min-width: 400px;
  height: 600px;
  background-color: #5a5a6e;
  margin-bottom: 20px;
`;

const ChatHeader = styled.div`
  width: 100%;
  height: 10%;
  padding: 0 20px;
  background-color: #3f3f4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 10px;
  overflow-y: scroll;
`;

const ChatMessageInput = styled.input`
  width: 95%;
  height: 100%;
  min-height: 30px;
  padding: 0 20px;
  background-color: #3f3f4f;
  color: white;
`;

const ChatMessage = styled.div<{ $isOwner?: boolean }>`
  width: 40%;
  padding: 10px;
  background-color: #3f3f4f;
  color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  align-self: ${({ $isOwner }) => ($isOwner ? "flex-end" : "flex-start")};
`;

export default function ChatScreen() {
  const { user } = useUserStore();
  const { chat, setChat } = useChatStore();
  const { messages } = useChatMessagesStore();

  const handleChatClose = () => {
    setChat(null);
  };

  const handleSendMessage = () => {
    if (!chat) {
      throw new Error("Chat not found");
    }

    if (!user) {
      throw new Error("User not found");
    }

    const messageInput = document.getElementById(
      "message-input",
    ) as HTMLInputElement;
    const message = messageInput.value;
    if (!message) {
      return;
    }

    sendChat(chat.id, user.id, message);
    messageInput.value = "";
  };

  const handleMessageInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {chat ? (
        <ChatContainer>
          <ChatHeader>
            <div>
              {chat.owner.id}의 방 - {chat.title}
            </div>
            <button onClick={handleChatClose}>닫기</button>
          </ChatHeader>
          <ChatMessageContainer>
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                $isOwner={message.isOwner}
                style={{ margin: "10px 0" }}
              >
                {message.text}
              </ChatMessage>
            ))}
          </ChatMessageContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChatMessageInput
              placeholder={"채팅 입력"}
              id={"message-input"}
              onKeyDown={handleMessageInputKeyDown}
            />
            <button style={{ minHeight: "30px" }} onClick={handleSendMessage}>
              전송
            </button>
          </div>
        </ChatContainer>
      ) : null}
    </div>
  );
}
