import { styled } from "styled-components";

export const ModalBackground = styled.div<{ isopen: boolean }>`
  display: ${({ isopen }) => (isopen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #202024;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

export const CloseModal = styled.div`
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px; 
    color: white;
    `;


