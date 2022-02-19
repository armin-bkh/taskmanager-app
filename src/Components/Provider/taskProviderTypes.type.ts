export type taskItemType = {
    id: number,
    value: string,
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

export type actionWithoutPayload = {
    type: string
}

export type actionType = actionWithPayloadType | actionWithoutPayload;