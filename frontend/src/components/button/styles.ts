'use client';

import styled from "styled-components";

export const Button = styled.button<{ buttontype?: 'open-modal' | 'delete-post' }>`
  background-color: ${({theme, buttontype}) => buttontype === 'delete-post' ? theme.arsenic : theme.indigoLavander};
  padding: 10px 25px;
  border-radius: 15px;
  margin: 10px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`

export const PlusIcon = styled.div`
  position: relative;
  height: 40px;
  width: 60px;

  &:before, &:after {
    background-color: ${({theme}) => theme.white};
    content: '';
    width: 22px;
    height: 2px;
    position: absolute;
    display: block;
    top: 20px;
    left: 33%;
    z-index: 0;
  }

  &:before {
    transform: rotate(-180deg);
  }

  &:after {
    transform: rotate(90deg);
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 25px;

    &::before, &:after {
      width: 20px;
      top: 12px;
      left: 25%;
    }
  }
`