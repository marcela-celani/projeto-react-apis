import styled from 'styled-components'

export const Container = styled.div`
    height: 82vh;
`

export const Titulo = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    margin: 50px;
`

export const Panel = styled.div`
    display: grid;
    height: 663px;
    grid-template-areas:    
    'a b d f'
    'a b e .'
    'c b e .'
    'c b e .';

    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 25% 25% 25% 25%;
    border: 1px solid black;
    border-radius: 8px;
    justify-items: center;
    padding: 26px;

    div {
        /* border: 1px solid black; */
    }

    .imgfrente {
        grid-area: a;
        background-color: white;
        border-radius: 8px;
        width: 282px;
    }

    .moves {
        grid-area: e;
        width: 292px;
        height: 453px;
        background-color: white;
        border-radius: 8px;
    }

    .imgcostas {
        grid-area: c;
        background-color: white;
        border-radius: 8px;
        width: 282px;
    }

    .name {
        grid-area: d;
    }

    .stats {
        grid-area: b;
        width: 343px;
        height: 614px;
        background-color: white;
        border-radius: 8px;
    }

    .imggeral {
        grid-area: f;
        width: 270px;
        height: 270px;
        margin: -100px 0.5rem;
    }

    h2 {
        color: white;
        font-size: 48px;
        font-weight: 700;
        line-height: normal;
    }

    h3 {
        color: black;
    }

    h4 {
        color: white;
        font-size: 16px;
        font-weight: 700;
    }

`


