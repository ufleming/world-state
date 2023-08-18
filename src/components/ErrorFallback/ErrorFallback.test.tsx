import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { ErrorFallback } from "./ErrorFallback"

describe('ErrorFallback', () => {
  const error = new Error('Test error')
  const resetErrorBoundary = jest.fn()

  afterEach(() => {
    resetErrorBoundary.mockClear()
  })

  it('renders the error message', () => {
    const { getByText } = render(<ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary}/>)
    const errorMessage = getByText('Test error')

    expect(errorMessage).toBeInTheDocument()
  })

  it('calls resetErrorBoundary when "Try again" button is clicked', () => {
    const { getByText } = render(<ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary}/>)
    const tryAgainButton = getByText('Try again')

    fireEvent.click(tryAgainButton)

    expect(resetErrorBoundary).toHaveBeenCalledTimes(1)
  })
})