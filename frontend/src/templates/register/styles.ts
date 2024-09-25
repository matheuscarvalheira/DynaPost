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
    max-width: 500px;
    input[type="text"],
    input[type="password"],
    input[type="email"] {
        max-width: 500px;
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
export const RadioContainer = styled.div`
    display: flex;
    margin-bottom: 16px;
    width: 100%;
    flex-wrap: wrap;
`

export const SubTitle = styled.h3`
    width: 100%;
    margin-bottom: 16px;
`