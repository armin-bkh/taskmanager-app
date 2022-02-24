import { createContext } from "react";
import {
  actionType,
  TasksType,
} from "../Components/Provider/taskProviderTypes.type";

export const TaskContext = createContext<TasksType>({} as TasksType);
export const TaskActionsContext = createContext<React.Dispatch<actionType>>(
  null!
);
