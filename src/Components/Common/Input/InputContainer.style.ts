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

    .notRequired {
      font-size: 9px;
      margin-left: 5px;
    }
  }

  & .input {
    background: #f1f5f9;
    box-shadow: 0 0 7px #e7e5e4;
    padding: 10px 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    height: ${(props) => (props.type === "textarea" ? "150px" : "auto")};
    resize: none;

  }
  & .error {
    margin-top: 3px;
    color: #dc2626;
    margin-left: 10px;
    font-size: 12px;
  }
`;
