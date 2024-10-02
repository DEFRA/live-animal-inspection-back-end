import { updateInspectionLengthController } from '~/src/api/inspection/controllers/update-inspection-length-controller'
import { updateInspectionLength } from '~/src/api/inspection/helpers/update-inspection-length'

// Mock the updateInspectionLength function
jest.mock('~/src/api/inspection/helpers/update-inspection-length', () => ({
  updateInspectionLength: jest.fn()
}))

describe('updateInspectionLengthController', () => {
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
      payload: {
        inspectionLengthObject: { length: 10 } // Example payload
      }
    }
    const mockResult = { updatedLength: 10 } // Example result
    updateInspectionLength.mockResolvedValue(mockResult) // Mock the implementation to return mockResult

    // Act
    const response = await updateInspectionLengthController.handler(
      mockRequest,
      h
    )

    // Assert
    expect(updateInspectionLength).toHaveBeenCalledWith(
      mockRequest.db,
      mockRequest.payload.inspectionLengthObject
    )
    expect(h.response).toHaveBeenCalledWith({
      message: 'success',
      result: mockResult
    })
    expect(h.code).toHaveBeenCalledWith(200)
    expect(response).toBe(response) // Ensures the response is returned correctly
  })
})
