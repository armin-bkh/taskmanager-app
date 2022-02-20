import { useFormik, FormikProps } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import Input from "../Common/Input/Input";
import SelectBox from "../Common/SelectBox/SelectBox";
import { useTasksActions } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
import { Button } from "../styled-components/Button.style";
import styles from "./AddTaskForm.module.scss";

const options = [
  { value: "todo", label: "todo" },
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

const AddTaskForm = () => {
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
  };

  const formik: FormikProps<formValueTypes> = useFormik<formValueTypes>({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true
  });

  useEffect(()=> {
    formik.setFieldTouched("status", true)
  }, [formik.values.status])

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
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
