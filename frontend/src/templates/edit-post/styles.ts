import styled from 'styled-components';

import {Textarea as _Textarea} from '@/components/textarea';
import {Modal as _Modal} from '@/components/modal';
import {Input as _Input} from '@/components/input';
import {Dropdown as _Dropdown} from '@/components/dropdown';

export const Main = styled.div`
  height: 100%;  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.black};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Textarea = styled(_Textarea)`
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  margin: 10px 0px;
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

export const Input = styled(_Input)`
    width: 100%;
    margin: 10px 0px;
    border-radius: 15px;
`

export const Modal = styled(_Modal)`
    width: 90%;
    max-width: 500px;
    padding: 30px;
`;

export const Dropdown = styled(_Dropdown)`
    border-radius: 15px;
`;

export const WrapperButton = styled.div`
  float: right;
`
;