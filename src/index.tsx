import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TaskProvider from "./Components/Provider/TaskProvider";
import { Toaster } from "react-hot-toast";
import EditTaskProvider from "./Components/Provider/EditTaskProvider";

ReactDOM.render(
  <BrowserRouter>
    <TaskProvider>
      <EditTaskProvider>
        <>
          <App />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              success: {
                style: {
                  minWidth: "290px",
                  boxShadow: "0 2px 5px #a2a3a355",
                  background: "#f0fdf4",
                },
              },
            }}
          />
        </>
      </EditTaskProvider>
    </TaskProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
