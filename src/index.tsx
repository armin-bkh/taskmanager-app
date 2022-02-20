import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TaskProvider from "./Components/Provider/TaskProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <BrowserRouter>
    <TaskProvider>
      <>
        <App />
        <Toaster position="top-right" reverseOrder={false}  />
      </>
    </TaskProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
