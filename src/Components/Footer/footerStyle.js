import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  font-family: "Poppins";
  font-weight: 400;
  margin: 40px 0;

  span {
    display: flex;
    justify-content: center;
  }

  a {
    color: white;
    font-size: 30px;
    padding: 0 10px;
    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    &:hover {
      text-decoration: underline;
      cursor: pointer;
      transform: scale(1.1);
    }

    &.black:hover {
      color: black;
    }

    &.blue:hover {
      color: #2391ff;
    }
  }
`;
