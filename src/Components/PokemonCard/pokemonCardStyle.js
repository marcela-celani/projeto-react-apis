import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 210px;
    justify-content: space-between;
    margin: 26.5px 15px;
    border-radius: 12px;
`
export const ContainerId = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    justify-content: space-between;
    
    h2 {
        color: white;
        font-size: 32px;
        font-weight: 700;
    }

    h4 {
        color: white;
        font-size: 16px;
        font-weight: 700;
    }

    img.pokemon {
        width: 193px;
        height: 193px;
        margin: -3rem 0.5rem;
        z-index: 1;
    }

    img.pokeball {
        width: 210px;
        height: 210px;
        z-index: 0;


       
    }

`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 1rem;
    align-items: center;

`

export const ButtonDetalhes = styled.button`


`

export const ButtonCapturar = styled.button`
    height: 38px;
    width: 146px;
    border-radius: 8px;
    padding: 4px 10px;
    outline: none;
    background-color: white;
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: 'Poppins', sans-serif;
`