import styled from "styled-components";

export const ButtonGroupWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
`

export const StyledLabel = styled.label<{ $isChecked: boolean }>`
    border-radius: 20px;
    padding: 12px 26px;
    border: ${(props) => (props.$isChecked ? '2px solid white' : '2px solid #8257E5')};
    cursor: pointer;
    font-size: 1rem;
    button {
        user-select: none;
    }
`