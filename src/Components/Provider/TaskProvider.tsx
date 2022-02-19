import { useContext, useReducer } from "react";
import { TaskActionsContext, TaskContext } from "../../Context/TaskContext";
import { actionCases, actionType, taskItemType, TasksType } from "./taskProviderTypes.type";

interface taskProviderProps {
  children: React.ReactChild;
}

const initialState = {
  tasks: [],
};

const reducer = (state: TasksType, action: actionType) => {
  switch (action.type) {
      case actionCases.ADDTASK: {
        return { tasks: [...state.tasks, {...action.payload}] }
      }
    default:
      return state;
  }
};

const TaskProvider = ({ children }: taskProviderProps) => {
  const [task, dispatch] = useReducer(reducer, initialState);
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
        dispatch({type: actionCases.ADDTASK, payload: task})
    }
    return { addTaskHandler };
}