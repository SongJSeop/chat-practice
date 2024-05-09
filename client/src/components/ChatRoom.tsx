import styled from "styled-components";

export const ChatRoom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--chat-room-color);
  height: 50px;
  border: 1px solid var(--background-color);

  &:hover {
    background-color: var(--chat-room-hover-color);
  }
`;

export const ChatRoomInnerDiv = styled.div<{
  widthPercent: number;
  textAlign: string;
}>`
  display: flex;
  justify-content: ${(props) => props.textAlign};
  align-items: center;
  width: ${(props) => props.widthPercent}%;
  height: 100%;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  border: 1px solid var(--background-color);
`;
