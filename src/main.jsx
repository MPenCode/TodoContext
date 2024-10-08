import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoProv } from "./context/contextToDo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProv>
      <App />
    </TodoProv>
  </StrictMode>
);
