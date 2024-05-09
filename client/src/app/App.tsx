import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { ChatPage, Header } from "components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <ChatPage />
  </React.StrictMode>,
);
