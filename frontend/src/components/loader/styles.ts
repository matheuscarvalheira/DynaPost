'use client';

import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid ${({ theme }) => theme.violetsAreBlue};
  border-radius: 50%;
  border-bottom-color: transparent;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    border: 4px solid ${({ theme }) => theme.violetsAreBlue};
    border-bottom-color: transparent;
  }
`
