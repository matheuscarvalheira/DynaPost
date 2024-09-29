'use client';

import styled from 'styled-components';

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 16px;
  background-color: ${({theme}) => theme.greenCharleson};
  resize: none;
  height: 200px;
  color: ${({theme}) => theme.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px 15px;
    font-size: 15px;
    height: 250px;
  }
`;