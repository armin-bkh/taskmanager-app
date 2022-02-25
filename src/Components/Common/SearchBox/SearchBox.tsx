import React, { useState } from "react";
import { InputContainer } from "../../styled-components/InputContainer.style";
import { BiSearchAlt } from 'react-icons/bi';

interface searchBoxProps {
  handleSearch: (value: string) => void;
  placeholder?: string;
}

const SearchBox = ({ handleSearch, placeholder }: searchBoxProps) => {
  const [value, setValue] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleSearch(e.target.value);
  };

  return (
      <InputContainer type="text">
        <input
          className="input"
          type="text"
          value={value}
          onChange={changeHandler}
          placeholder={placeholder || ""}
        />
        <BiSearchAlt className="icon" />
      </InputContainer>
  );
};

export default SearchBox;
