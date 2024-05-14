import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { ChatListPage, Header } from "components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <ChatListPage />
  </React.StrictMode>,
);
