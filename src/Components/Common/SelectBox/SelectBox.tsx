import Select from "react-select";
import { InputContainer } from "../Input/InputContainer.style";

type optionType = { value: string; label: string };

interface selectBoxProps {
  options: optionType[];
  value: string;
  lbl: string;
  id: string;
  formik: any;
  name: string;
  placeholder: string;
  styles?: any;
}

const SelectBox = ({
  options,
  value,
  lbl,
  id,
  formik,
  name,
  placeholder,
  styles,
}: selectBoxProps) => {
  const defaultValue = (val: string) => {
    return options.find((option) => option.value === val) || null;
  };

  const changeHandler = (selectedOption: any) => {
    formik.setFieldValue("status", selectedOption.value);
  };

  return (
    <InputContainer type="text">
      <label htmlFor={id}>{lbl}:</label>
      <Select
        styles={styles}
        placeholder={placeholder}
        id={id}
        options={options}
        value={defaultValue(value)}
        onChange={changeHandler}
        onBlur={() => formik.setFieldTouched("status", true)}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
    </InputContainer>
  );
};

export default SelectBox;
