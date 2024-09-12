import { ReactNode } from "react";
import * as S from './styles'
import { Button } from "@/components/button";

export const Header = (): ReactNode => {
  return (
    <S.Header>
      <Button text={"Salvar"}/>
    </S.Header>
  )
}