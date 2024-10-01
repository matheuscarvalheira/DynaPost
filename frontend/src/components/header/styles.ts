'use client';

import styled from "styled-components";
import {Button as _Button} from '@/components/button'

export const Header = styled.header`
  background-color: ${({theme}) => theme.blackRaisin};
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: ${({theme}) => theme.platinum};

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Button = styled(_Button)`
  position: absolute;
  right: 0;
  margin: 0 15px;

  @media (max-width: 600px) {
    margin: 0 10px;
  }
`