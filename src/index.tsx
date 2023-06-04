import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./assets/tailwind.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const render = () => root.render(App())

render()
