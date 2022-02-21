import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
import styles from "./TaskDetail.module.scss";
import { BsDot } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const TaskDetail = () => {
  const [taskData, setTaskData] = useState<taskItemType | null>(null);
  const { tasks } = useTasks();
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

  return (
    <>
      <header className={styles.taskDetailHeader}>
        <h1 className={styles.title}>
          <BsDot /> {taskData?.title}
        </h1>
        <p className={styles.status}>{taskData?.status}</p>
      </header>
      <div className={styles.taskDetailDescription}>
        <p>{taskData?.description}</p>
      </div>
      <footer className={styles.taskDetailFooter}>
        <span>created: {taskData?.created}</span>
        <span>updated: {taskData?.updated}</span>
      </footer>

      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.edit}`}>
          <FaEdit />
        </button>
        <button className={`${styles.btn} ${styles.trash}`}>
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default TaskDetail;
