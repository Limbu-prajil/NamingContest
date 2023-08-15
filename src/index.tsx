import {createRoot} from "react-dom/client"
import * as React from "react"
import App from "./components/app"

const container = document.getElementById("app")
const root = createRoot(container)

root.render(<App />)