export type taskItemType = {
  id: number;
  title: string;
  description: string;
  status: string;
  created: string;
  updated: string;
};

export type TasksType = {
  tasks: taskItemType[];
};

export type actionWithPayloadType = {
  type: "ADDTASK" | "REMOVETASK" | "EDITTASK" | "COMPLETETASK" | "PROGRESSTASK";
  payload: taskItemType;
};

export type actionWithoutPayoladType = {
  type: "FETCH";
};

export type actionType = actionWithoutPayoladType | actionWithPayloadType;

export enum actionCases {
  FETCH = "FETCH",
  ADDTASK = "ADDTASK",
  REMOVETASK = "REMOVETASK",
  EDITTASK = "EDITTASK",
  COMPLETETASK = "COMPLETETASK",
  PROGRESSTASK = "PROGRESSTASK",
}
