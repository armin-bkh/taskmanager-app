import React, { useEffect, useState } from "react";
import SearchBox from "../Common/SearchBox/SearchBox";
import { useTasks } from "../Provider/TaskProvider";
import { taskItemType } from "../Provider/taskProviderTypes.type";
import SearchedTasks from "../SearchedTasks/SearchedTasks";
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
  const [search, setSearch] = useState("");
  const [searchedTasks, setSearchedTasks] = useState<taskItemType[] | null>(
    null
  );

  useEffect(() => {
    searchHandler(search);
  }, [tasks]);

  const searchHandler = (value: string) => {
    setSearch(value);
    if (value) {
      const searchedTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedTasks(searchedTasks);
    } else setSearchedTasks(null);
  };

  return (
    <div className={styles.tasksListContainer}>
      {tasks.length > 0 && (
        <form className={styles.taskSearchBoxSection}>
          <SearchBox
            handleSearch={searchHandler}
            placeholder="search for tasks..."
          />
        </form>
      )}
      {searchedTasks ? (
        <SearchedTasks tasks={searchedTasks} />
      ) : (
        <div className={styles.taskList}>
          {taskStatus.map((status) => (
            <TaskSection
              key={status.id}
              title={status.value}
              tasks={tasks.filter((task) => task.status === status.value)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
