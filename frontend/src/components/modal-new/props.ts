import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
  children: ReactNode;
}