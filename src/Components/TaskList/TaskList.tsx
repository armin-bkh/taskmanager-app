import { useTasks } from "../Provider/TaskProvider";
import TaskSection from "../TaskSection/TaskSection";
import styles from "./TaskList.module.scss";

const taskStatus = [
  {
    id: 1,
    value: "to do",
  },
  {
    id: 2,
    value: "in progress",
  },
  {
    id: 3,
    value: "completed",
  },
];

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className={styles.taskList}>
      {taskStatus.map((status) => (
        <TaskSection
          key={status.id}
          title={status.value}
          tasks={tasks.filter((task) => task.status === status.value)}
        />
      ))}
    </div>
  );
};

export default TaskList;
