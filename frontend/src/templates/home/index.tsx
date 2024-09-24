import { FC } from "react";
import { Post } from "@/components/post";
import * as S from './styles';
import { Header } from "@/components/header";
import { Dropdown } from "@/components/dropdown";
import { Button } from "@/components/button";

export const HomeTemplate: FC = () => {
  return (
    <S.Home>
      <Header/>
      <Dropdown items={['Turma 1', 'Turma 2', 'Turma 3']}/>
      <Button text={'cadastrar'} onClick={() => console.log('cadastrar')}/>
      <Button buttonType="open-modal" onClick={() => console.log('abrir')}/>
      <Button text={'apagar'} buttonType="delete-post" onClick={() => console.log('apagar')}/>
      <S.Feed>
        <Post />
        <Post />
        <Post />
      </S.Feed>
    </S.Home>
  )
}