import { ReactNode, useContext } from "react";
import * as S from './styles';
import { Button } from "../button";
import { AuthContext } from "@/contexts/auth-context";

export const Header = (): ReactNode => {
  const { logOut } = useContext(AuthContext)
  
  return (
    <S.Header>
      <S.Title>DynaPost</S.Title>
      <Button text="Logout" onClick={() => logOut()} />
    </S.Header>
  )
}