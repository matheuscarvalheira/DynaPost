'use client';
import React from 'react';
import * as S from './styles';
import { PostProps } from './props';

export const Post = ({ className, onClick }: PostProps) => {
  return (
    <S.Post className={className} onClick={onClick}>
      <S.Container>
        <S.Header>
          <S.Profile>
            <S.ProfileImage src="./imgs/profile.png"/>
            <S.Name>Prof. Lorem</S.Name>
          </S.Profile>

          <S.DatesContainer>
            <S.Date>Publicado em 14/08/2024, 18:56</S.Date>
            <S.Date>Editado em 14/08/2024, 18:56</S.Date>
          </S.DatesContainer>
        </S.Header>

        <S.ContentContainer>
          <S.Class>Turma 1FTDA</S.Class>
          <S.Title>Título da postagem</S.Title>
          <S.Content>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </S.Content>
        </S.ContentContainer>
      </S.Container>
    </S.Post>
  );
};