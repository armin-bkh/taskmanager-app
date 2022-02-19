import styled from "styled-components";

interface inputContainerProps {
  type: string;
}

export const InputContainer = styled.fieldset<inputContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  & label {
    text-transform: capitalize;
    margin-bottom: 7px;
  }

  & .input {
    padding: 10px 15px;
    border: none;
    outline: none;
    box-shadow: 0 0 5px #dbdbdb;
    margin-bottom: 3px;
    border-radius: 5px;
    transition: all .3s ease;
    height: ${(props) => (props.type === "textarea" ? "150px" : "auto")};
    resize: none;

    &:focus{
        box-shadow: 0 0 10px #dbdbdb;
    }
  }
  & span {
    color: #dc2626;
    margin-left: 10px;
    font-size: 12px;
  }
`;
