import React from 'react';
import { ModalProps } from './props';
import { CloseModal, ModalBackground, ModalContent } from './styles';
import { IoIosClose } from 'react-icons/io';

export const Modal: React.FC<ModalProps> = ({ isopen, children }) => {
  return (
    <ModalBackground isopen={isopen}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
      {children}
        <CloseModal onClick={(e) => e.stopPropagation()}>
          <IoIosClose />
        </CloseModal>
      </ModalContent>
    </ModalBackground>
  );
};