import styled from "styled-components";

export const ChatRoomContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px 200px;
`;

export const ChatRoomContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border: 1px solid var(--background-color);
  border-radius: 5px;
  background-color: var(--chat-room-header-color);
`;
