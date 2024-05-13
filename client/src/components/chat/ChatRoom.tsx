import styled from "styled-components";

export const ChatRoom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--chat-room-color);
  height: 50px;
  border: 1px solid var(--background-color);
  min-width: 1000px;

  &:hover {
    background-color: var(--chat-room-hover-color);
    cursor: pointer;
  }
`;

export const ChatRoomInnerDiv = styled.div<{
  widthPercent: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.widthPercent}%;
  height: 100%;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  border: 1px solid var(--background-color);
`;
