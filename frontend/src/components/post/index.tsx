'use client';
import React from 'react';
import * as S from './styles';
import { PostProps } from './props';
import { formateDate } from '@/utils/formate-date';

export const Post = ({ className, isOnModal, userType, currentPost, onClick }: PostProps) => {
  return (
    <S.Post className={className} onClick={onClick}>
      <S.Container>
        <S.Header>
          <S.Profile>
            <S.ProfileImage src="./imgs/profile.png"/>
            <S.Name></S.Name>
          </S.Profile>

          <S.DatesContainer>
            <S.Date>Publicado em {formateDate(currentPost?.createdAt)}</S.Date>
            {currentPost?.modifiedAt && currentPost?.modifiedAt !== currentPost?.createdAt ? <S.Date>Editado em {formateDate(currentPost?.modifiedAt)}</S.Date> : null}
          </S.DatesContainer>
        </S.Header>

        <S.ContentContainer>
          {userType === 'teacher' && !isOnModal ? <S.EditButton src="./svg/edit-icon.svg" /> : null}
          <S.Title>{currentPost?.title}</S.Title>
          <S.Content>{currentPost?.body}
          </S.Content>
        </S.ContentContainer>
      </S.Container>
    </S.Post>
  );
};