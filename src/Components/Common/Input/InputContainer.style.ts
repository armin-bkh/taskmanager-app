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
    display: flex;
    align-items: center;

    .notRequired{
      font-size: 9px;
      margin-left: 5px;
    }
  }

  & .input {
    padding: 10px 15px;
    border: 1.5px solid #0891b2;
    outline: none;
    background: #fafafa;
    border-radius: 5px;
    transition: all .3s ease;
    height: ${(props) => (props.type === "textarea" ? "150px" : "auto")};
    resize: none;

    &:focus{
        box-shadow: 0 0 5px #0891b2;
    }
  }
  & .error {
    margin-top: 3px;
    color: #dc2626;
    margin-left: 10px;
    font-size: 12px;
  }
`;
