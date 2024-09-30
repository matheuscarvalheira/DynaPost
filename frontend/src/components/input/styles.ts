import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input<{ $showIcon: boolean }>`
  background-color: ${({theme}) => theme.greenCharleson};
  color: ${({theme}) => theme.white};
  padding: 15px 20px;
  border-radius: 15px;
  width: 100%;
  padding-left: ${({ $showIcon }) => ($showIcon ? '40px' : '20px')};
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({theme}) => theme.grayGranite};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;