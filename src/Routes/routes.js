import AddTaskPage from "../Pages/AddTaskPage";
import HomePage from "../Pages/HomePage";

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "add-task", element: <AddTaskPage /> },
]

export default routes;