import styled from "styled-components";

export const Aside = styled.aside`
  position: relative;
  background: #fcfcfc;
  padding: 20px 0;
  box-shadow: 0 5px 5px #dbdbdb;
  width: 70px;
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);

  @media screen and (max-width: 767px) {
    width: 50px;
    height: calc(100vh - 65px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-left: 5px #fff solid;
    right: -20px;
    top: -1px;
    transform: rotate(45deg);
    border-radius: 50%;
  }

  & .navBar {
    & .nav {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
    }
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  & .active {
    ${(props) => ({
      background: props.color,
      color: "#fff",
    })}
  }

  & .notActive {
    ${(props) => ({
      border: `1px solid ${props.color}`,
      color: props.color,
    })}
  }

  & .link {
    padding: 5px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid ${(props) => props.color};
    font-size: 24px;

    @media screen and (max-width: 767px) {
      font-size: 18px;
    }

    &:hover {
      ${(props) => ({
        background: props.color,
        color: "#fff",
      })}
    }
  }
`;
