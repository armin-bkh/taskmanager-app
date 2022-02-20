import { taskItemType } from "../Provider/taskProviderTypes.type";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./TaskSection.module.scss";

interface taskSectionProps {
  title: string;
  tasks: taskItemType[];
}

const TaskSection = ({ title, tasks }: taskSectionProps) => {
  console.log(tasks);

  return (
    <div className={styles.taskSection}>
      <header>
        <div>
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
    </div>
  );
};

export default TaskSection;
