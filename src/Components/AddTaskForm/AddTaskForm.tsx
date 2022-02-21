import { useFormik, FormikProps } from "formik";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../Common/Input/Input";
import SelectBox from "../Common/SelectBox/SelectBox";
import { useTasksActions } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
import { Button } from "../styled-components/Button.style";
import queryString from "query-string";
import styles from "./AddTaskForm.module.scss";

export const options = [
  { value: "to do", label: "to do" },
  { value: "in progress", label: "in progress" },
  { value: "completed", label: "completed" },
];
interface formValueTypes {
  title: string;
  status: string;
  description: string;
}

const initialValues = {
  title: "",
  status: "",
  description: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("title is required"),
  status: Yup.string().required("status of your task is required"),
  description: Yup.string().notRequired(),
});

export const customStyles = {
  control: (styles: any, { isFocused }: any) => ({
    transition: "all .3s ease",
    display: "flex",
    borderRadius: "5px",
    backgroundColor: "#f1f5f9",
    outline: isFocused ? "none" : "none",
    boxShadow: "0 0 7px #e7e5e4",
    border: "none",
  }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#d6d3d1" : "#fff",
      color: "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const AddTaskForm = () => {
  const { search } = useLocation();
  const navgiate = useNavigate();
  const { addTaskHandler } = useTasksActions();

  const onSubmit = (values: formValueTypes) => {
    const nowTime = new Date().toLocaleString();
    const task: taskItemType = {
      ...values,
      id: new Date().getTime(),
      created: nowTime,
      updated: nowTime,
    };
    addTaskHandler(task);
    formik.handleReset();
    navgiate("/");
  };

  const formik: FormikProps<formValueTypes> = useFormik<formValueTypes>({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (search) {
      const parsedSearch = queryString.parse(search);
      formik.setFieldValue("status", parsedSearch.status);
    }
  }, [search]);

  useEffect(()=> {
    if(formik.values.status) formik.setFieldTouched("status", true)
  }, [formik.values.status])

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <h1 className={styles.title}>Add Task</h1>
      <Input
        formik={formik}
        lbl="title"
        id="title"
        placeholder="title..."
        name="title"
        type="text"
      />
      <SelectBox
        lbl="status"
        id="status"
        options={options}
        value={formik.values.status}
        name="status"
        formik={formik}
        placeholder="select..."
        styles={customStyles}
      />
      <Input
        formik={formik}
        lbl="description"
        id="description"
        placeholder="description..."
        name="description"
        type="textarea"
      />
      <Button disabled={!formik.isValid} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddTaskForm;
