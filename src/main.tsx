import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Top from "./routes/Top.tsx";
import Chat from "./routes/Chat.tsx";
import TermsOfService from "./routes/TermOfService.tsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/terms",
    element: <TermsOfService />,
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
