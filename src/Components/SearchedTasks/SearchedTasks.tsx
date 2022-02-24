import { taskItemType } from "../Provider/taskProviderTypes.type";
import TaskItem from "../TaskItem/TaskItem";
import styles from './SearchedTasks.module.scss';

interface searchedTasksProps {
  tasks: taskItemType[];
}

const SearchedTasks = ({ tasks }: searchedTasksProps) => {
  return (
    <div className={styles.searchedTasksContainer}>
      {tasks.length ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <h1 className={styles.emptyMessage}>can't found this task!</h1>
      )}
    </div>
  );
};

export default SearchedTasks;
