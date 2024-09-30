import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ClassList = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 380px;
    width: 80vw;

    a {
        margin-bottom: 8px;
        border-radius: 10px;
        color: white;
        padding: 8px 16px;
        display: block;
        transition: padding-left 0.3s ease;

        &:hover {
            background-color: #444;
            padding-left: 40px;
            color: #996DFF;
            font-weight: bold;
        }
    }
`

export const Title = styled.h1`
    margin-bottom: 64px;
`