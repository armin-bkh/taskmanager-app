import { taskItemType } from "../Provider/taskProviderTypes.type";

export function sortByDate(tasks: taskItemType[], by: "created" | "updated"){
    const sortedTasks = tasks.sort((a: taskItemType, b: taskItemType) => {
        if(by === "created") return +new Date(b.created) - +new Date(a.created)
        return +new Date(b.updated) - +new Date(a.updated)
    });

    return sortedTasks;
}