'use client';

import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({theme}) => theme.blackRaisin};
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 600px) {
    padding: 15px 0;
  }

  button {
    position: absolute;
    right: 0;
    top: 5%;
  }
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: ${({theme}) => theme.platinum};

  @media (max-width: 600px) {
    font-size: 18px;
  }
`