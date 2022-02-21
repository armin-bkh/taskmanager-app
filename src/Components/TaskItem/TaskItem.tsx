import { taskItemType } from "../Provider/taskProviderTypes.type";
import styles from "./TaskItem.module.scss";
import { BsDot } from "react-icons/bs";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useTasksActions } from "../Provider/TaskProvider";
import { useNavigate } from "react-router-dom";
import { useEdit } from "../Provider/EditTaskProvider";
import { AiOutlineCheck } from "react-icons/ai";

interface taskItemProps {
  task: taskItemType;
}

const TaskItem = ({ task }: taskItemProps) => {
  const { removeTaskHandler, completeTaskHandler } = useTasksActions();
  const setEdit = useEdit();
  const navigate = useNavigate();

  return (
    <div className={styles.taskItemContainer}>
      <div
        className={styles.taskItem}
        onClick={() => navigate(`/add-task`, { state: { task } })}
      >
        <header className={styles.header}>
          <BsDot />
          {task.title}
        </header>
        {task.description && (
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{task.description}</p>
            <button
              className={styles.completeBtn}
              onClick={() => completeTaskHandler(task)}
            >
              {task.description === "completed" ? "back" : <AiOutlineCheck />}
            </button>
          </div>
        )}
        <footer className={styles.footer}>
          <span>
            created: <br />
            {task.created}
          </span>
          <span>
            updated: <br />
            {task.updated}
          </span>
        </footer>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => setEdit(task)}
          type="button"
          className={styles.edit}
        >
          <FaEdit />
        </button>
        <button
          onClick={() => removeTaskHandler(task)}
          type="button"
          className={styles.trash}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
