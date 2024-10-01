import { ReactNode} from "react";
import * as S from './styles';

// Usar como template para criar componentes
export const Loader = (): ReactNode => {

  return (
    <S.LoaderContainer>
      <S.Loader />
    </S.LoaderContainer>
  )
}