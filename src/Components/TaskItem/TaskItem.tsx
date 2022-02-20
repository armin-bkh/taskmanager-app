import { taskItemType } from "../Provider/taskProviderTypes.type";
import styles from "./TaskItem.module.scss";
import { BsDot } from "react-icons/bs";

interface taskItemProps {
  task: taskItemType;
}

const TaskItem = ({ task }: taskItemProps) => {
  return (
    <div className={styles.taskItem}>
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
    </div>
  );
};

export default TaskItem;
