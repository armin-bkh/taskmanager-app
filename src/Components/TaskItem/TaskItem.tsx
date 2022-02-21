import { taskItemType } from "../Provider/taskProviderTypes.type";
import styles from "./TaskItem.module.scss";
import { BsDot } from "react-icons/bs";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useTasksActions } from "../Provider/TaskProvider";
import { useNavigate } from "react-router-dom";
interface taskItemProps {
  task: taskItemType;
}

const TaskItem = ({ task }: taskItemProps) => {
  const { removeTaskHandler } = useTasksActions();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`task-${task.id}`, { state: task })}
      className={styles.taskItem}
    >
      <header className={styles.header}>
        <BsDot />
        {task.title}
      </header>
      {task.description && (
        <p className={styles.description}>{task.description}</p>
      )}
      <footer className={styles.footer}>
        <span>created: {task.created}</span>
        <span>updated: {task.updated}</span>
      </footer>
      <div className={styles.buttons}>
        <button type="button" className={styles.edit}>
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
