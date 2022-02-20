import { useTasks } from "../Provider/TaskProvider";
import TaskSection from "../TaskSection/TaskSection";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <>
      <TaskSection title="todo" tasks={tasks.filter(task => task.status === "todo")} />
    </>
  );
};

export default TaskList;
