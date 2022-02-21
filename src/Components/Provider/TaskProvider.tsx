import { useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { TaskActionsContext, TaskContext } from "../../Context/TaskContext";
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
      const sortedTasks = updatedTasks.sort(
        (a: taskItemType, b: taskItemType) =>
          +new Date(b.created) - +new Date(a.created)
      );
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
      cloneTasks.sort(
        (a: taskItemType, b: taskItemType) =>
          +new Date(b.created) - +new Date(a.created)
      );

      return { tasks: cloneTasks };
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
    toast.success(`${task.title} added`, {
      duration: 4000,
    });
    dispatch({ type: actionCases.ADDTASK, payload: task });
  };
  const removeTaskHandler = (task: taskItemType) => {
    toast.success(`${task.title} removed`, {
      duration: 4000,
    });
    dispatch({ type: actionCases.REMOVETASK, payload: task });
  };
  return { addTaskHandler, removeTaskHandler };
};
