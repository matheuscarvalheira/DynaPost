import styled from "styled-components";

export const Modal = styled.div<{ $open: boolean }>`
  background-color: ${({theme}) => theme.blackOpacity};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: ${({$open}) => $open ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`

export const ModalBox = styled.div`
  width: 850px;
  height: 500px;
  background-color: ${({theme}) => theme.blackRaisin};
  border-radius: 20px;
  padding: 30px;

  @media (max-width: 900px) {
    width: 90%;
    padding: 25px;
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;