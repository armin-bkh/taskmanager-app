import styled from "styled-components";

export const Aside = styled.aside`
  height: 100%;
  padding: 20px 0;
  box-shadow: 0 5px 5px #dbdbdb;
  width: 50px;
  display: flex;
  justify-content: center;

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

  & a {
    padding: 5px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    @media screen and (max-width: 767px){
        font-size: 18px;
    }

    ${(props) => ({
      border: `1px solid ${props.color}`,
      color: props.color,
    })}

    &:hover {
      ${(props) => ({
        background: props.color,
        color: "#fff",
      })}
    }
  }
`;
