import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 101;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;
