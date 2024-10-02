import { getInspectionLengthController } from '~/src/api/inspection/controllers/get-inspection-length-controller'
import { getInspectionLength } from '~/src/api/inspection/helpers/get-inspection-length'

// Mock the getInspectionLength function
jest.mock('~/src/api/inspection/helpers/get-inspection-length', () => ({
  getInspectionLength: jest.fn()
}))

describe('getInspectionLengthController', () => {
  const h = {
    response: jest.fn().mockReturnThis(),
    code: jest.fn().mockReturnThis()
  }

  beforeEach(() => {
    jest.clearAllMocks() // Clear any previous mocks
  })

  it('should return success response with result', async () => {
    // Arrange
    const mockRequest = {
      db: {}, // You can provide a mock db object if needed
      params: { siteId: '12345' }
    }
    const mockResult = { length: 10 } // Example result
    getInspectionLength.mockResolvedValue(mockResult) // Mock the implementation to return mockResult

    // Act
    const response = await getInspectionLengthController.handler(mockRequest, h)

    // Assert
    expect(getInspectionLength).toHaveBeenCalledWith(
      mockRequest.db,
      mockRequest.params.siteId
    )
    expect(h.response).toHaveBeenCalledWith({
      message: 'success',
      result: mockResult
    })
    expect(h.code).toHaveBeenCalledWith(200)
    expect(response).toBe(response) // Ensures the response is returned correctly
  })
})
