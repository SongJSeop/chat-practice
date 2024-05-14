import { useChatStore } from "stores";
import styled from "styled-components";

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

const ChatMessageInput = styled.input`
  width: 95%;
  height: 100%;
  padding: 0 20px;
  background-color: #3f3f4f;
  color: white;
`;

export default function ChatScreen() {
  const { chat, setChat } = useChatStore();

  const handleChatClose = () => {
    setChat(null);
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
              {chat.owner.id} - {chat.title}
            </div>
            <button onClick={handleChatClose}>닫기</button>
          </ChatHeader>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChatMessageInput placeholder={"채팅 입력"} />
            <button>전송</button>
          </div>
        </ChatContainer>
      ) : null}
    </div>
  );
}
