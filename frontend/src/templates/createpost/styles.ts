import styled from 'styled-components';
import {Input as _Input} from '@/components/input';
import {Modal as _Modal} from '@/components/modal';
import {Textarea as _Textarea} from '@/components/textarea';
import {Dropdown as _Dropdown} from '@/components/dropdown';

export const Modal = styled(_Modal)`
    width: 100%;
    max-width: 500px;
    padding: 30px;
`;

export const Input = styled(_Input)`
    margin-bottom: 15px;
    border-radius: 10px;
`;

export const Dropdown = styled(_Dropdown)`
    position: absolute;
`;

export const Textarea = styled(_Textarea)`
    width: 90%; !important
    margin: 30px; 
    color: red; !important;
`;