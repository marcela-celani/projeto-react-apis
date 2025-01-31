import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;

    h1 {
        font-family: 'Poppins', sans-serif;
    }
`

export const Titulo = styled.h1`

    font-family: 'Poppins', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    margin: 50px;
`

export const ModalMessage = styled.h1`

    border: 1px solid red;
`