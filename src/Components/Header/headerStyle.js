import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  height: 160px;
  background-color: white;
  position: sticky;
    top: 0;
`;

export const Logo = styled.img`
  justify-self: center;
  align-self: center;
  width: 307px;
  height: 113px;
`;

export const Button = styled.button`
    width: 20vw;
    height: 74px;
    border-radius: 8px;
    align-self: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: white;
    border: none;
    justify-self: end;
    margin-right: 42px;

    

    &.blue {
        background-color: #33A4F5;
    }

    &.red {
        background-color: #FF6262;
    }
`;
