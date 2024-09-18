'use client';

import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 50px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  resize: vertical;
  background-color: ${({theme}) => theme.greenCharleson};
  resize: none;
  height: 150px;
  color: ${({theme}) => theme.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;