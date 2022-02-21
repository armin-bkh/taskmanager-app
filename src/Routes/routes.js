import AddTaskPage from "../Pages/AddTaskPage";
import HomePage from "../Pages/HomePage";
import TaskDetailPage from "../Pages/TaskDetailPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "add-task", element: <AddTaskPage /> },
  { path: "task-:id", element: <TaskDetailPage /> },
];

export default routes;
