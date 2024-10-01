import { ReactNode, useRef, useState } from "react";
import * as S from './styles'
import { DropdownProps } from "./props";


// Usar como template para criar componentes
export const Dropdown = ({items}: DropdownProps): ReactNode => {
  const [current, setCurrent] = useState('Selecione a turma');
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleDropdown = () => {
    if (!wrapperRef.current) return;

    if (dropdownHeight === 0) {
      setDropdownHeight(wrapperRef.current.clientHeight)
    } else {
      setDropdownHeight(0)
    }
  }

  const handleOption = (item: string) => {
    setCurrent(item);
    setDropdownHeight(0);
  }

  return (
    <S.Dropdown>
      <S.Header onClick={handleDropdown} dropdownheight={dropdownHeight}>
        <S.CurrentText current={current}>{current}</S.CurrentText>
      </S.Header>
      <S.OptionsList dropdownheight={dropdownHeight}>
        <S.ListWrapper ref={wrapperRef}>

        {items.map((item, index) => (
          <S.Option onClick={() => handleOption(item)} key={index}>{item}</S.Option>
        ))}
        </S.ListWrapper>
      </S.OptionsList>
    </S.Dropdown>
  )
}