import styled from 'styled-components'
import pokeball from '../../assets/pokeball.png'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 210px;
    justify-content: space-between;
    margin: 26.5px 15px;
    border-radius: 12px;
    background-image: url(${pokeball});
    background-size: 250px;
    background-repeat: no-repeat;
    background-position: 220px -30px;
`
export const ContainerId = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .etiqueta {
        margin-left: 23px;
        margin-top: 23px;
    }
    
    h2 {
        color: white;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
    }

    h4 {
        color: white;
        font-size: 16px;
        font-weight: 700;
    }
`

export const ImgPoke = styled.img`
    width: 193px;
    height: 193px;
    margin: -53px 0.5rem;
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

export const ButtonExcluir = styled.button`
    height: 38px;
    width: 146px;
    border-radius: 8px;
    padding: 4px 10px;
    outline: none;
    background-color: #FF6262;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: 'Poppins', sans-serif;
`


