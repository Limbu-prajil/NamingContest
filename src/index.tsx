import {createRoot} from "react-dom/client"
import * as React from "react"
import App from "./components/app"

const container = document.getElementById("app")
const root = createRoot(container)

// declare global {
//     interface Window {
//         initialData: string
//     }
// }


// [] is for empty contest lists to start with
//We are fetching the data with axios while React is rendering.
//we've put the axios call where the data is needed
//i.e inside ContestList

root.render(<App initialData={(window as any).initialData} />)
