import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTasks, useTasksActions } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
import styles from "./TaskDetail.module.scss";
import { BsDot } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useEdit } from "../Provider/EditTaskProvider";

const TaskDetail = () => {
  const [taskData, setTaskData] = useState<taskItemType>(null!);
  const { tasks } = useTasks();
  const { removeTaskHandler } = useTasksActions();
  const setEdit = useEdit();
  const { id } = useParams();
  const { state }: any = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setTaskData(state.task);
      return;
    }
    if (id) {
      const data = tasks.find((task) => task.id === Number(id));
      if (data) setTaskData(data);
      else navigate("/");
    }
  }, [tasks]);

  useEffect(() => {
    if (taskData) {
      const data = tasks.find((task) => task.id === Number(id));
      if (data) setTaskData(data);
    }
  }, [tasks]);

  const removeHandler = () => {
    removeTaskHandler(taskData);
    navigate("/");
  };

  const editHandler = () => {
    setEdit(taskData);
  };

  return taskData ? (
    <div className={styles.taskDetailContainer}>
      <header className={styles.taskDetailHeader}>
        <h1 className={styles.title}>
          <BsDot /> {taskData?.title}
        </h1>
        <p className={styles.status}>{taskData?.status}</p>
      </header>
      {taskData.description ? (
        <div className={styles.taskDetailDescription}>
          <p>{taskData?.description}</p>
        </div>
      ) : (
        <p className={styles.message}>--- has no discription</p>
      )}
      <footer className={styles.taskDetailFooter}>
        <span>created: {taskData?.created}</span>
        <span>updated: {taskData?.updated}</span>
      </footer>

      <div className={styles.buttons}>
        <button
          onClick={editHandler}
          type="button"
          className={`${styles.btn} ${styles.edit}`}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          onClick={removeHandler}
          className={`${styles.btn} ${styles.trash}`}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  ) : null;
};

export default TaskDetail;
