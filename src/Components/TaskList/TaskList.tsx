import React, { useState } from "react";
import SearchBox from "../Common/SearchBox/SearchBox";
import { useTasks } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
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
  const [searchedTasks, setSearchedTasks] = useState<taskItemType[] | null>(
    null
  );

  const searchHandler = (value: string) => {
    if (value) {
      const searchedTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedTasks(searchedTasks);
    } else setSearchedTasks(null);
  };

  return (
    <div>
      <div>
        <SearchBox
          handleSearch={searchHandler}
          placeholder="search in tasks..."
        />
      </div>
      <div className={styles.taskList}>
        {taskStatus.map((status) => (
          <TaskSection
            key={status.id}
            title={status.value}
            tasks={
              searchedTasks
                ? searchedTasks.filter((task) => task.status === status.value)
                : tasks.filter((task) => task.status === status.value)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
