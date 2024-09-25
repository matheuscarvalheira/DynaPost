import styled from "styled-components";

export const Main = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input {
        max-width: 380px;
        width: 80vw;
        margin-bottom: 30px;
    }
    button {
        margin: unset;
    }
`

export const Title = styled.h2`
    margin-bottom: 64px;
`