import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TaskProvider from "./Components/Provider/TaskProvider";

ReactDOM.render(
  <BrowserRouter>
    <TaskProvider>
      <App />
    </TaskProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
