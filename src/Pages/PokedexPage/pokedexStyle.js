import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;
    color: white;
    margin-left: 50px;
    justify-items: center;
    height: 100%;
    

    h2 {
        font-size: 26px;
        margin-top: 5px;
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
  margin-top: 25px;
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);

  &:hover, &:focus {
    transform: scale(1.05);
  }


`