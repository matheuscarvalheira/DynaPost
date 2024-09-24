export interface ModalProps {
    isopen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    showIcon?: boolean;
  }