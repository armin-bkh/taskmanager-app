import styled from "styled-components";

interface buttonProps {
  disabled: boolean;
}

export const Button = styled.button<buttonProps>`
  position: relative;
  padding: 10px 15px;
  border-radius: 4px;
  background: #818cf8;
  color: #fff;
  outline: none;
  border: none;
  overflow: hidden;
  z-index: 2;
  font-weight: 700;
  outline: #818cf8 solid 1px;
  outline-offset: 2px;
  transition: all 0.3s ease;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  &:hover {
    &::after {
      ${({ disabled }) => {
        if (!disabled)
          return {
            height: "100%",
            boxShadow: "0 0 10px #6366f1",
          };
      }}
    }
  }

  &::after {
    content: "";
    position: absolute;
    background: #6366f1;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    transition: all 0.3s ease;
    z-index: -1;
  }

  ${({ disabled }) => {
    if (disabled)
      return {
        opacity: 0.6,
        cursor: "not-allowed",
      };
  }}
`;
