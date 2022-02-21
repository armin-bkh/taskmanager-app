import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { customStyles, options } from "../AddTaskForm/AddTaskForm";
import Input from "../Common/Input/Input";
import SelectBox from "../Common/SelectBox/SelectBox";
import { useTasksActions } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
import { Button } from "../styled-components/Button.style";
import styles from "./EditTaskFormModal.module.scss";

interface editTaskFormModalProps {
  task: taskItemType;
  setEdit: React.Dispatch<React.SetStateAction<taskItemType | null>>;
}

type editTaskFormValueType = {
  title: string;
  status: string;
  description: string;
};

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

const EditTaskFormModal = ({ task, setEdit }: editTaskFormModalProps) => {
  const [formValue, setFormValue] = useState<editTaskFormValueType | null>();
  const { editTaskHandler } = useTasksActions();

  useEffect(() => {
    setFormValue({
      title: task.title,
      status: task.status,
      description: task.description,
    });
  }, []);

  const onSubmit = (values: editTaskFormValueType) => {
    const editedTask = {
      ...values,
      id: task.id,
      created: task.created,
      updated: new Date().toLocaleString(),
    };
    editTaskHandler(editedTask);
    setEdit(null);
  };
  const formik: FormikProps<editTaskFormValueType> =
    useFormik<editTaskFormValueType>({
      initialValues: formValue || initialValues,
      validationSchema,
      onSubmit,
      enableReinitialize: true,
    });

  return (
    <section className={styles.editTaskFormContainer}>
      <form className={styles.editTaskForm} onSubmit={formik.handleSubmit}>
        <header className={styles.header}>
          <h1 className={styles.title}>Edit Task</h1>
          <button
            onClick={() => setEdit(null)}
            type="button"
            className={styles.closeBtn}
          >
            <FaTimes />
          </button>
        </header>
        <Input
          formik={formik}
          lbl="title"
          id="title"
          placeholder="title..."
          name="title"
          type="text"
        />
        <SelectBox
          formik={formik}
          id="status"
          lbl="status"
          name="status"
          value={formik.values.status}
          placeholder="select..."
          options={options}
          styles={customStyles}
        />
        <Input
          type="textarea"
          formik={formik}
          id="description"
          lbl="description"
          name="description"
          placeholder="description..."
        />
        <Button disabled={!formik.isValid} type="submit">
          submit
        </Button>
      </form>
    </section>
  );
};

export default EditTaskFormModal;
