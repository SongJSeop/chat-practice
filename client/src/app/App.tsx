import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {ChatRoom} from "components";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChatRoom />
    <ChatRoom />
    <ChatRoom />
    <ChatRoom />
    <ChatRoom />
  </React.StrictMode>,
)
