import logger from "./logger"

describe('logger', () => {
  it('logs an info message', () => {
    const spyConsoleInfo = jest.spyOn(console, 'info')
    const message = 'Info message'

    logger.info(message)

    expect(spyConsoleInfo).toHaveBeenCalledWith(message)
    spyConsoleInfo.mockRestore()
  })

  it('logs a warning message', () => {
    const spyConsoleWarn = jest.spyOn(console, 'warn')
    const message = 'Warning message'

    logger.warn(message)

    expect(spyConsoleWarn).toHaveBeenCalledWith(message)
    spyConsoleWarn.mockRestore()
  })

  it('logs an error message', () => {
    const spyConsoleError = jest.spyOn(console, 'error')
    const message = 'Error message'

    logger.error(message)

    expect(spyConsoleError).toHaveBeenCalledWith(message)
    spyConsoleError.mockRestore()
  })
})