import { useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { TaskActionsContext, TaskContext } from "../../Context/TaskContext";
import { sortByDate } from "../Utils/sortByDate";
import {
  actionCases,
  actionType,
  taskItemType,
  TasksType,
} from "./taskProviderTypes.type";

interface taskProviderProps {
  children: React.ReactChild;
}

const initialState = {
  tasks: [],
};

const reducer = (state: TasksType, action: actionType) => {
  switch (action.type) {
    case "FETCH": {
      const savedTasks = JSON.parse(
        localStorage.getItem("taskManagerData") || ""
      );
      return { tasks: savedTasks || [] };
    }
    case "ADDTASK": {
      const updatedTasks = [...state.tasks, { ...action.payload }];
      const sortedTasks = sortByDate(updatedTasks, "created");

      return { tasks: sortedTasks };
    }
    case "REMOVETASK": {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    case "EDITTASK": {
      const cloneTasks = [...state.tasks];
      const index = cloneTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      const selectedTask = { ...cloneTasks[index] };
      selectedTask.title = action.payload.title;
      selectedTask.status = action.payload.status;
      selectedTask.description = action.payload.description;
      selectedTask.updated = new Date().toLocaleString();
      cloneTasks[index] = selectedTask;
      const sortedTasks = sortByDate(cloneTasks, "updated");

      return { tasks: sortedTasks };
    }
    case "COMPLETETASK": {
      const cloneTasks = [...state.tasks];
      const index = cloneTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      const selectedTask = { ...cloneTasks[index] };
      selectedTask.updated = new Date().toLocaleString();
      if (selectedTask.status === "completed") {
        selectedTask.status = "to do";
        cloneTasks[index] = selectedTask;
      } else {
        selectedTask.status = "completed";
        cloneTasks[index] = selectedTask;
      }
      const sortedTasks = sortByDate(cloneTasks, "updated");

      return { tasks: sortedTasks };
    }
    case "PROGRESSTASK": {
      const cloneTasks = [...state.tasks];
      const index = cloneTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      const selectedTask = { ...cloneTasks[index] };
      selectedTask.updated = new Date().toLocaleString();
      if (selectedTask.status === "in progress") {
        selectedTask.status = "to do";
        cloneTasks[index] = selectedTask;
      } else {
        selectedTask.status = "in progress";
        cloneTasks[index] = selectedTask;
      }
      const sortedTasks = sortByDate(cloneTasks, "updated");
      return { tasks: sortedTasks };
    }
    default:
      return state;
  }
};

const TaskProvider = ({ children }: taskProviderProps) => {
  const [task, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actionCases.FETCH });
  }, []);

  useEffect(() => {
    localStorage.setItem("taskManagerData", JSON.stringify(task.tasks));
  }, [task]);

  return (
    <TaskContext.Provider value={task}>
      <TaskActionsContext.Provider value={dispatch}>
        {children}
      </TaskActionsContext.Provider>
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => useContext(TaskContext);

export const useTasksActions = () => {
  const dispatch = useContext(TaskActionsContext);
  const addTaskHandler = (task: taskItemType) => {
    toast.success(
      `${task.title} successfully added ${
        task.status === "to do" ? "to do" : `to ${task.status}`
      }!`,
      {
        duration: 4000,
      }
    );
    dispatch({ type: actionCases.ADDTASK, payload: task });
  };
  const removeTaskHandler = (task: taskItemType) => {
    toast.success(`${task.title} successfully removed!`, {
      duration: 4000,
    });
    dispatch({ type: actionCases.REMOVETASK, payload: task });
  };

  const editTaskHandler = (task: taskItemType) => {
    toast.success(`successully done!`, {
      duration: 4000,
    });
    dispatch({ type: actionCases.EDITTASK, payload: task });
  };

  const completeTaskHandler = (task: taskItemType) => {
    toast.success(
      `${task.title} ${
        task.status === "completed" ? "added to do" : "cmopleted"
      }!`,
      {
        duration: 4000,
      }
    );
    dispatch({ type: actionCases.COMPLETETASK, payload: task });
  };

  const progressTaskHandler = (task: taskItemType) => {
    toast.success(
      `${task.title} ${
        task.status === "in progress" ? "added to do" : "added to in progress"
      }!`,
      {
        duration: 4000,
      }
    );
    dispatch({ type: actionCases.PROGRESSTASK, payload: task });
  };

  return {
    addTaskHandler,
    removeTaskHandler,
    editTaskHandler,
    completeTaskHandler,
    progressTaskHandler,
  };
};
