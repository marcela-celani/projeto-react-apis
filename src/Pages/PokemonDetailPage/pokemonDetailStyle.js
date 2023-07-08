import styled from 'styled-components'

export const Container = styled.div`
    height: 82vh;
`

export const Panel = styled.div`
    display: grid;
    height: 60vh;
    grid-template-areas:    
    'a b d f'
    'a b e .'
    'c b e .'
    'c b e .';

    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 25% 25% 25% 25%;
    border: 1px solid black;
    border-radius: 8px;

    div {
        border: 1px solid black;
    }

    .imgfrente {
        grid-area: a;
    }

    .moves {
        grid-area: b;
    }

    .imgcostas {
        grid-area: c;
    }

    .name {
        grid-area: d;
    }

    .stats {
        grid-area: e;
    }

    .imggeral {
        grid-area: f;
    }

`

