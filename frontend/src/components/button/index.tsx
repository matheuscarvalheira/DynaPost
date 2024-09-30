import { ReactNode } from "react";
import * as S from './styles'
import { ButtonProps } from "./props";

export const Button = ({text, onClick, buttonType, ...props}: ButtonProps): ReactNode => {

  return (
    <S.Button buttontype={buttonType} onClick={onClick} {...props}>
      {buttonType === 'open-modal' ?
        <S.PlusIcon />
      : text}
     
    </S.Button>
  )
}