import { deleteInspectionLengthsData } from '~/src/api/configuration/helpers/delete-inspection-lengths'
import { deleteInspectionLengthsDataController } from '~/src/api/configuration/controllers/delete-inspection-length-controller'

// Mock the `deleteInspectionLengthsData` function
jest.mock('~/src/api/configuration/helpers/delete-inspection-lengths')

describe('deleteInspectionLengthsDataController', () => {
  it('should call deleteInspectionLengthsData and return a success response', async () => {
    // Arrange
    const mockRequest = { db: {} }
    const mock = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }

    // Act
    await deleteInspectionLengthsDataController.handler(mockRequest, mock)

    // Assert
    expect(deleteInspectionLengthsData).toHaveBeenCalledWith(mockRequest.db)
    expect(mock.response).toHaveBeenCalledWith({
      message: 'Collection - InspectionLength dropped successfully'
    })
    expect(mock.code).toHaveBeenCalledWith(200)
  })
})
