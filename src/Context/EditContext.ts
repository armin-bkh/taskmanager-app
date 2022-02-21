import { createContext } from "react";
import { taskItemType } from "../Components/Provider/taskProviderTypes.type";

export const EditContext = createContext<
  React.Dispatch<React.SetStateAction<taskItemType | null>>
>(null!);
