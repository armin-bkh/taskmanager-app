import { useContext, useEffect, useReducer } from "react";
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
    const savedTasks = JSON.parse(localStorage.getItem("taskManagerData") || '');
    return { tasks: savedTasks || [] }
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
      return { tasks: state.tasks.filter(task => task.id !== action.payload.id) }
    }
    default:
      return state;
  }
};

const TaskProvider = ({ children }: taskProviderProps) => {
  const [task, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: actionCases.FETCH})
  }, [])

  useEffect(() => {
    localStorage.setItem("taskManagerData", JSON.stringify(task.tasks));
  }, [task])
  
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
    dispatch({ type: actionCases.ADDTASK, payload: task });
  };
  const removeTaskHandler = (task: taskItemType) => {
    dispatch({ type: actionCases.REMOVETASK, payload: task })
  }
  return { addTaskHandler, removeTaskHandler };
};
