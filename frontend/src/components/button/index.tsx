import { ReactNode } from "react";
import * as S from './styles'
import { ButtonProps } from "./props";

// Usar como template para criar componentes
export const Button = ({text}: ButtonProps): ReactNode => {

  return (
    <S.Button>
      <S.Teste>{text}</S.Teste>
    </S.Button>
  )
}