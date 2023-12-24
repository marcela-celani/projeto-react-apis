import styled from 'styled-components'

export const Section = styled.div`
    background-color: white !important;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 300px;
        text-align: center;
    }
    
`

export const Titulo = styled.h1`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;

    h1 {
        font-family: 'Poppins', sans-serif;
        
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
    }

    h2 {
        font-weight: 400;
        font-size: 28px;
        line-height: 36px;
    }

    .ditto {
        width: 350px;
        margin-left: 50px;
    }

`


export const Button = styled.button`
    
  width: 350px;
  height: 74px;
  border-radius: 8px;
  margin-top: 35px;
  align-self: left;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: white;
  border: none;
  background-color: #33a4f5;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);

  &:hover, &:focus {
    transform: scale(1.05);
  }


`