import styled from 'styled-components'
import pokeball from '../../assets/pokeball.png'

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
    border-radius: 32px;

    align-items: center;
    padding: 26px;
    margin: 0 25px;

    background-image: url(${pokeball});
    background-size: 963px;
    background-repeat: no-repeat;
    background-position: right -120px top -120px;

    .imgfrente {
        grid-area: a;
        background-color: white;
        border-radius: 8px;
        width: 282px;
    }

    .moves {
        grid-area: e;
        width: 20vw;
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
        width: 20vw;
        height: 614px;
        background-color: white;
        border-radius: 8px;
    }

    .imggeral {
        grid-area: f;
        width: 300px;
        height: 300px;
        align-self: end;
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

    .type-container {
        margin-top: 4px;
        img {
            margin-right: 6px;
        }

        span {
            display: flex;
        }
    }

    @media only screen and (max-width: 767px) {
    /* Insira os estilos específicos para dispositivos móveis aqui */
    display: grid;
    height: 1700px;
    grid-template-areas:    
    'f '
    'd'
    'b'
    'e'
    'a'
    'c';
    grid-template-rows: 5% 8% 25% 25% 18% 18%;
    grid-template-columns: 100%;
    border-radius: 32px;
    justify-items: center;
    align-items: center;
    padding: 26px;
    margin: 0 25px;

    background-image: url(${pokeball});
    background-size: 963px;
    background-repeat: no-repeat;
    background-position: right -120px top -120px;

    .imgfrente {
        grid-area: a;
        background-color: white;
        border-radius: 8px;
        width: 282px;
    }

    .moves {
        grid-area: e;
        width: 250px;
        height: 400px;
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
        
        .types {
            display: flex;
        }
    }

    .stats {
        grid-area: b;
        width: 250px;
        height: 400px;
        background-color: white;
        border-radius: 8px;
    }

    .imggeral {
        grid-area: f;
        width: 300px;
        height: 300px;
        align-self: top;
    }

    }

    /* Estilos para tablets (768px a 1023px) */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    height: 1000px;
    grid-template-areas:    
    'd  f '
    'b  e '
    'b  e '
    'a  c ';
    grid-template-rows: 20%  25% 25% 30%;
    grid-template-columns: 50% 50%;
    border-radius: 32px;
    justify-items: center;
    align-items: center;
    padding: 26px;
    margin: 0 25px;

    background-image: url(${pokeball});
    background-size: 963px;
    background-repeat: no-repeat;
    background-position: right -120px top -120px;

    .imgfrente {
        grid-area: a;
        background-color: white;
        border-radius: 8px;
        width: 282px;
    }

    .moves {
        grid-area: e;
        width: 250px;
        height: 400px;
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
        width: 250px;
        height: 400px;
        background-color: white;
        border-radius: 8px;
    }

    .imggeral {
        grid-area: f;
        width: 300px;
        height: 300px;
        align-self: top;
    }
    }
   

`




