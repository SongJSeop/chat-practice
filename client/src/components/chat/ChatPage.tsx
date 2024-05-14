import { useChatStore } from "stores";
import styled from "styled-components";

const ChatContainer = styled.div`
  width: 60%;
  min-width: 400px;
  height: 600px;
  background-color: #5a5a6e;
  margin-bottom: 20px;
`;

export default function ChatPage() {
  const { chat } = useChatStore();
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
          <h1>채팅창</h1>
        </ChatContainer>
      ) : null}
    </div>
  );
}
