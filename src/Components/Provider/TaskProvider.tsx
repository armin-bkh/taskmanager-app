import { useContext, useReducer } from "react";
import { TaskActionsContext, TaskContext } from "../../Context/TaskContext";
import { actionType, TasksType } from "./taskProviderTypes.type";

interface taskProviderProps {
  children: React.ReactChild;
}

const initialState = {
  tasks: [],
};

const reducer = (state: TasksType, action: actionType) => {
  switch (action.type) {
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
    return dispatch;
}