import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  padding: 10px 15px;
  border-radius: 5px;
  background: #7dd3fc;
  color: #fff;
  outline: none;
  border: none;
  overflow: hidden;
  z-index: 2;
  font-weight: 700;

  @media screen and (max-width: 767px){
      width: 100%;
  }

  &:hover {
    &::after {
      height: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    background: #0ea5e9;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    transition: all .3s ease;
    z-index: -1;
  }
`;
