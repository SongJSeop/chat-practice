import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { ChatPage } from "components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChatPage />
  </React.StrictMode>,
);
