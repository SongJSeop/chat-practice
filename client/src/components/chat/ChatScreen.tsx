import { useChatStore } from "stores";
import styled from "styled-components";

const ChatContainer = styled.div`
  width: 60%;
  min-width: 400px;
  height: 600px;
  background-color: #5a5a6e;
  margin-bottom: 20px;
`;

const ChatHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: #3f3f4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        </ChatContainer>
      ) : null}
    </div>
  );
}
