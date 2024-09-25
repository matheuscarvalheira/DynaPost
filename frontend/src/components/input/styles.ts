import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<{ $showIcon: boolean }>`
  padding: 20px;
  border-radius: 50px;
  width: 100%;
  max-width: 300px;
  height: 30px;
  background-color: ${({theme}) => theme.greenCharleson};
  color: ${({theme}) => theme.white};
  padding-left: ${({ $showIcon }) => ($showIcon ? '40px' : '10px')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SearchIcon = styled.div`
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