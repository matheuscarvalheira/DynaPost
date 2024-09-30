import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  buttonType?: 'open-modal' | 'delete-post';
}