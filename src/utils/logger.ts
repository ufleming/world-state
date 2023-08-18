const logger = {
  info: (message: unknown): void => {
    console.info(message)
  },
  warn: (message: unknown): void => {
    console.warn(message)
  },
  error: (message: unknown): void => {
    console.error(message)
  },
}

export default logger
