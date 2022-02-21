import { createContext } from "react";

export const EditContext = createContext<React.Dispatch<React.SetStateAction<number | null>>>(null!);