import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"

const dependencies = {
  react: React,
  "react-dom": ReactDOM,
}

// @ts-ignore
window.__deps = dependencies

// @ts-ignore
if (!window.__skip_render) {
  ReactDOM.render(<App />, document.getElementById("root"))
}
