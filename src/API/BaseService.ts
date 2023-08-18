import logger from "src/utils/logger"

class BaseService {
  protected baseUrl: string

  constructor(baseUrl = process.env.REACT_APP_API_URL) {
    this.baseUrl = baseUrl as string
  }

  public get<T>(path: string, options?: RequestInit): Promise<T> {
    return fetch(`${ this.baseUrl }${ path }`, options)
      .then(response => {
        if (!response.ok) {
          logger.error(response)
          throw new Error(`${ response.statusText }`)
        }
        return response.json() as Promise<T>
      })
      .catch((error: Error) => {
        throw error
      })
  }
}

export default BaseService
