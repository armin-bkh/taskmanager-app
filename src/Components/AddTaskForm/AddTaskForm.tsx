import { useFormik, FormikProps } from "formik";
import * as Yup from 'yup';
import Input from "../Common/Input/Input";
import { useTasksActions } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
import { Button } from "../styled-components/Button.style";
import styles from './AddTaskForm.module.scss';

interface formValueTypes {
  title: string;
  description: string;
}

const initialValues = {
  title: "",
  description: "",
};

const validationSchema = Yup.object({
    title: Yup.string().required("title is required"),
    description: Yup.string().notRequired(),
})


const AddTaskForm = () => {
    const { addTaskHandler } = useTasksActions();

    const onSubmit = (values: formValueTypes) => {
      const nowTime = new Date().toLocaleString();
        const task: taskItemType = {
            ...values,
            id: new Date().getTime(),
            status: "todo",
            created: nowTime,
            updated: nowTime,
        };
        addTaskHandler(task);
    };

    const formik: FormikProps<formValueTypes> = useFormik<formValueTypes>({
    initialValues,
    onSubmit,
    validationSchema,
  });

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
      <Input
        formik={formik}
        lbl="description"
        id="description"
        placeholder="description..."
        name="description"
        type="textarea"
      />
      <Button disabled={!formik.isValid} type="submit">Submit</Button>
    </form>
  );
};

export default AddTaskForm;
