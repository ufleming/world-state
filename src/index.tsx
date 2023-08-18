import React from "react"
import ReactDOM from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import { App, ErrorFallback } from "src/components"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <App/>
    </ErrorBoundary>
  </React.StrictMode>,
)
