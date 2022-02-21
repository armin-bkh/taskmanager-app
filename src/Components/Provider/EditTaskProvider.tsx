import { useContext, useState } from "react";
import { EditContext } from "../../Context/EditContext";

interface editTaskProviderProps {
    children: React.ReactChild,
}

const EditTaskProvider = ({ children }: editTaskProviderProps) => {
    const [editId, setEditId] = useState<number | null>(null);

    return (
        <EditContext.Provider value={setEditId}>
            {editId && <h1>hello</h1>}
            {children}
        </EditContext.Provider>
    )
}

export default EditTaskProvider;

export const useEdit = () => useContext(EditContext);