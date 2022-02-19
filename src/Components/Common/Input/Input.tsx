import { InputContainer } from "./InputContainer.style";

interface inputProps {
    formik: any,
    type: string,
    lbl: string,
    id: string,
    name: string,
    placeholder: string
}


const Input = ({ formik, type, lbl, id, name, placeholder }: inputProps) => {
    return (
        <InputContainer type={type}>
            <label htmlFor={id}>{lbl}:</label>
            {
                type === "text" ? (
                    <input placeholder={placeholder} className="input" type={type} id={id} {...formik.getFieldProps(name)} />
                ) : <textarea placeholder={placeholder} className="input" id={id} {...formik.getFieldProps(name)}></textarea>

            }
            {formik.touched[name] && formik.errors[name] && (
                <span>{formik.errors[name]}</span>
            )}
        </InputContainer>
    )
}

export default Input;