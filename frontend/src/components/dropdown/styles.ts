'use client';

import styled from "styled-components";

export const Dropdown = styled.div`
  width: 220px;
  cursor: pointer;
  position: relative;
  margin: 10px 0;
`

export const Header = styled.div<{dropdownheight: number}>`
  background-color: ${({theme}) => theme.greenCharleson};
  border: 1px solid ${({theme}) => theme.greenCharleson};
  padding: 10px 20px;
  border-radius: 15px;
  width: 100%;
  position: relative;
  transition: border 0.4s ease;

  &:before, &:after {
    content: '';
    width: 10px;
    height: 1px;
    background-color: ${({theme, dropdownheight}) => dropdownheight === 0 ? theme.grayGranite : theme.violetsAreBlue};
    position: absolute;
    display: block;
    transition: right 0.4s ease, color 0.4s ease;
  }

  &:before {
    right: ${({dropdownheight}) => dropdownheight === 0 ? '20px' : '23px'};
    transform: rotate(-45deg);
    top: 17px;
  }

  &:after {
   right: ${({dropdownheight}) => dropdownheight === 0 ? '27px' : '23px'};
   transform: rotate(45deg);
   top: 17px;
  }

  &:hover {
    border: 1px solid ${({theme}) => theme.violetsAreBlue};
  }
`

export const CurrentText = styled.p<{current: string}>`
  color: ${({theme, current}) => current === 'Selecione a turma' ? theme.grayGranite : theme.platinum};
  font-size: 15px;
`

export const OptionsList = styled.div<{dropdownheight: number}>`
  height:${({dropdownheight}) => dropdownheight}px;
  overflow: hidden;
  transition: height 0.3s ease;
  position: absolute;
  background-color: ${({theme}) => theme.greenCharleson};
  width: 220px;
  margin-top: 5px;
  border-radius: 15px;
  z-index: 1;
`

export const ListWrapper = styled.div`
  padding: 10px;
`

export const Option = styled.div`
  font-size: 14px;
  padding: 7px 0;
  transition: color 0.4s ease;

  &:hover {
    color: ${({theme}) => theme.violetsAreBlue};
  }
`