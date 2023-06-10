import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/tailwind.css"
import App from "./app/App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
