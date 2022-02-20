import { taskItemType } from "../Provider/taskProviderTypes.type";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./TaskSection.module.scss";
import TaskItem from "../TaskItem/TaskItem";

interface taskSectionProps {
  title: string;
  tasks: taskItemType[];
}

const TaskSection = ({ title, tasks }: taskSectionProps) => {
  console.log(tasks);

  return (
    <div className={styles.taskSection}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.badge}>{tasks.length}</span>
        </div>
        <Link
          className={styles.addBtn}
          to={{ pathname: "/add-task", search: `status=${title}` }}
        >
          <BiPlus />
        </Link>
      </header>
      <div>
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default TaskSection;
