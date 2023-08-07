import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  height: 160px;
  background-color: white;
  position: sticky;
  top: 0;

  div {
    display: flex;
    justify-self: end;

  }

  & .icone {
    width: 25px;
    height: 25px;
    margin-left: 42px;
    align-self: center;
  }
`;

export const Logo = styled.img`
  justify-self: center;
  align-self: center;
  width: 307px;
  height: 113px;
`;

export const LinkPage = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  align-self: center;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  
`;

export const Button = styled.button`
  width: 20vw;
  height: 74px;
  border-radius: 8px;
  align-self: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: white;
  border: none;
  justify-self: end;
  margin-right: 42px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);

  &.blue {
    background-color: #33a4f5;
  }

  &.red {
    background-color: #ff6262;
  }

  &:hover, &:focus {
    transform: scale(1.05);
  }
`;
