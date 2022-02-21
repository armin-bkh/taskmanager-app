import { useContext, useState } from "react";
import { EditContext } from "../../Context/EditContext";
import EditTaskFormModal from "../EditTaskFormModal/EditTaskFormModal";
import { taskItemType } from "./taskProviderTypes.type";

interface editTaskProviderProps {
    children: React.ReactChild,
}

const EditTaskProvider = ({ children }: editTaskProviderProps) => {
    const [edit, setEdit] = useState<taskItemType | null>(null);

    return (
        <EditContext.Provider value={setEdit}>
            {edit && <EditTaskFormModal task={edit} setEdit={setEdit} />}
            {children}
        </EditContext.Provider>
    )
}

export default EditTaskProvider;

export const useEdit = () => useContext(EditContext);