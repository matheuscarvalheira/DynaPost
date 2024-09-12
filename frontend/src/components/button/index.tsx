import { ReactNode } from "react";
import * as S from './styles'
import { ButtonProps } from "./props";

export const Button = ({text}: ButtonProps): ReactNode => {

  return (
    <S.Button>
      <S.Teste>{text}</S.Teste>
    </S.Button>
  )
}