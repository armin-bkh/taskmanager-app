import React, { useState } from "react";
import { InputContainer } from "../Input/InputContainer.style";

interface searchBoxProps {
  handleSearch: (value: string) => void;
  placeholder?: string;
}

const SearchBox = ({ handleSearch, placeholder }: searchBoxProps) => {
  const [search, setSearch] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
      <InputContainer type="text">
        <input
          className="input"
          type="text"
          value={search}
          onChange={changeHandler}
          placeholder={placeholder || ""}
        />
      </InputContainer>
  );
};

export default SearchBox;
