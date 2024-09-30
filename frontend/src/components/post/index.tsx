'use client';
import React from 'react';
import * as S from './styles';
import { PostProps } from './props';
import { formateDate } from '@/utils/formate-date';

export const Post = ({ className, isOnModal, userType, title, body, createdAt, modifiedAt, teacherName, onClick }: PostProps) => {
  return (
    <S.Post className={className} onClick={onClick}>
      <S.Container>
        <S.Header>
          <S.Profile>
            <S.ProfileImage src="./imgs/profile.png"/>
            <S.Name>{teacherName}</S.Name>
          </S.Profile>

          <S.DatesContainer>
            <S.Date>Publicado em {formateDate(createdAt)}</S.Date>
            {modifiedAt ? <S.Date>Editado em {formateDate(modifiedAt)}</S.Date> : null}
          </S.DatesContainer>
        </S.Header>

        <S.ContentContainer>
          {userType === 'teacher' && !isOnModal ? <S.EditButton src="./svg/edit-icon.svg" /> : null}
          <S.Title>{title}</S.Title>
          <S.Content>{body}
          </S.Content>
        </S.ContentContainer>
      </S.Container>
    </S.Post>
  );
};