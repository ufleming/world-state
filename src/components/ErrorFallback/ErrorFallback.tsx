import type { FallbackProps } from "react-error-boundary"

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert" className="p-1">
      <h1>Something went wrong:</h1>
      <pre className="text-color-red">{ error.message }</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
