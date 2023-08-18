import BaseService from "./BaseService"

class TestBaseService extends BaseService {
  public getBaseUrl(): string {
    return this.baseUrl
  }
}

describe('BaseService', () => {
  let originalFetch: typeof global.fetch
  let mockFetch: jest.Mock
  const mockResponse = { data: 'mocked data' }

  beforeEach(() => {
    mockFetch = jest.fn()
    global.fetch = mockFetch
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('should make a GET request with the provided path and return the response data', async () => {
    const service = new TestBaseService()

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    })

    const result = await service.get('/test')

    expect(mockFetch).toHaveBeenCalledWith(`${ service.getBaseUrl() }/test`, undefined)
    expect(result).toEqual(mockResponse)
  })

  it('should handle network error and throw an error', async () => {
    const service = new TestBaseService()
    const errorMessage = 'Network error'

    mockFetch.mockRejectedValueOnce(new Error(errorMessage))

    await expect(service.get('/test')).rejects.toThrowError(errorMessage)
    expect(mockFetch).toHaveBeenCalledWith(`${ service.getBaseUrl() }/test`, undefined)
  })

  it('should handle response error and throw an error', async () => {
    const service = new TestBaseService()
    const errorResponse = { status: 404, statusText: 'Not Found' }

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: errorResponse.status,
      statusText: errorResponse.statusText,
    })

    await expect(service.get('/test')).rejects.toThrowError(errorResponse.statusText)
    expect(mockFetch).toHaveBeenCalledWith(`${ service.getBaseUrl() }/test`, undefined)
  })
})
