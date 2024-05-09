import styled from "styled-components";

export const ChatRoom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--chat-room-color);
    height: 50px;
    border: 1px solid var(--background-color);
    border-radius: 5px;
    
    &:hover {
        background-color: var(--chat-room-hover-color);
    }
`;