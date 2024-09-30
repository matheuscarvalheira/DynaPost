import { ReactNode, useContext } from "react";
import * as S from './styles';
import { AuthContext } from "@/contexts/auth-context";

export const Header = (): ReactNode => {
  const { logOut } = useContext(AuthContext);
  
  return (
    <S.Header>
      <S.Title>DynaPost</S.Title>
      <S.Button text="Logout" onClick={() => logOut()} />
    </S.Header>
  )
}