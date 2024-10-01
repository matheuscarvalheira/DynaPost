'use client';

import styled from 'styled-components';
import {Input as _Input} from '@/components/input';
import {Button as _Button} from '@/components/button'

export const Form = styled.div``;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Input = styled(_Input)`
    font-size: 19px;

    @media (max-width: 600px) {
        font-size: 17px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const Button = styled(_Button)`
    width: 130px;

    @media (max-width: 600px) {
        width: 100px;
        margin: 5px;
    }
`;

