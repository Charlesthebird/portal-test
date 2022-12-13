import "@stoplight/elements/styles.min.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/greenTheme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
);
