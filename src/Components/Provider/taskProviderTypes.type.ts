export type taskItemType = {
    id: number,
    title: string,
    description: string,
    status: "completed" | "in progress" | "todo",
    created: string,
    updated: string,
}

export type TasksType = {
    tasks: taskItemType[]
}

export type actionWithPayloadType = {
    type: string,
    payload: taskItemType
}


export type actionType = actionWithPayloadType;

export enum actionCases {
    ADDTASK = "ADDTASK",
}