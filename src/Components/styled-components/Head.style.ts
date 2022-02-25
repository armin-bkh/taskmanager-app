import styled from "styled-components";

export const Head = styled.header`
  background: #fcfcfc;
  grid-column: 1 / span 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  box-shadow: 5px 0 5px #dbdbdb;
  height: 80px;

  @media screen and (max-width: 767px) {
    height: 65px;
  }

  & .me {
    display: flex;
    align-items: center;

    & img {
      border-radius: 50%;
      height: auto;
      width: 50px;
      margin-right: 7px;
    }

    @media screen and (max-width: 767px) {
      & img {
        width: 30px;
      }
      font-size: 13px;
    }
  }

  & .logo {
    display: flex;
    align-items: center;

    & span {
      margin-left: 7px;
    }
  }
`;
