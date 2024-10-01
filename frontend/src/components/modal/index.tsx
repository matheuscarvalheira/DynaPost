import { ReactNode } from "react";
import * as S from './styles';
import { ModalProps } from "./props";

export const Modal = ({ isOpen, handleOpen, children }: ModalProps): ReactNode => {
  return (
    <S.Modal $open={isOpen}>
      <S.ModalBox>
        <S.Header>
          <S.CloseIcon src='./svg/close-icon.svg' onClick={() => handleOpen(false)}/>
        </S.Header>
        {children}
      </S.ModalBox>
    </S.Modal>
  )
}