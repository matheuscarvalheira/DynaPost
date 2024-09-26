import styled from 'styled-components';
import {Input as _Input} from '@/components/input';
import {Modal as _Modal} from '@/components/modal';
import {Textarea as _Textarea} from '@/components/textarea';
import {Dropdown as _Dropdown} from '@/components/dropdown';
import {Button as _Button} from '@/components/button';

export const Modal = styled(_Modal)`
    width: 100%;
    max-width: 500px;
    padding: 30px;
`;

export const Input = styled(_Input)`
    margin: 10px 0px;
    border-radius: 15px;
    width: 100%;
`;

export const Dropdown = styled(_Dropdown)`
    border-radius: 15px;
`;

export const Textarea = styled(_Textarea)`
    margin: 10px 0px;
    width: 100%;
    border-radius: 15px;
`;

export const Button = styled(_Button)`
    margin: 10px 0px;
    border-radius: 15px;
    float: right;
    margin-right: 10px;
`;