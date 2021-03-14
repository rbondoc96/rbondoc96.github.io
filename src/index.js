import React from "react"
import ReactDOM from "react-dom"

import {UIProvider} from "./context/UIContext"

import App from "./app"

ReactDOM.render(
    <React.StrictMode>
        <UIProvider>
            <App />
        </UIProvider>
    </React.StrictMode>, 
    document.getElementById("root")
)