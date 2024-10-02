import { updateInspectionLength } from '~/src/api/inspection/helpers/update-inspection-length'

describe('updateInspectionLength', () => {
  let mockDb

  beforeEach(() => {
    // Create a mock database object
    mockDb = {
      collection: jest.fn().mockReturnValue({
        bulkWrite: jest.fn()
      })
    }
  })

  it('should update multiple inspection lengths successfully', async () => {
    // Arrange
    const updateObjects = [
      {
        _id: '603d2f9e6bdf6783c8b58b8b',
        Marshalling: 10,
        Unloading: 5,
        Inspection: 20,
        LoadingAndCleanUp: 15,
        TotalInspectionLength: 50
      },
      {
        _id: '603d2f9e6bdf6783c8b58b8c',
        Marshalling: 12,
        Unloading: 8,
        Inspection: 22,
        LoadingAndCleanUp: 16,
        TotalInspectionLength: 58
      }
    ]

    const mockResult = { modifiedCount: 2 } // Example mock result
    mockDb
      .collection('InspectionLengths')
      .bulkWrite.mockResolvedValue(mockResult)

    // Act
    const result = await updateInspectionLength(mockDb, updateObjects)

    // Assert
    expect(mockDb.collection).toHaveBeenCalledWith('InspectionLengths')
    expect(
      mockDb.collection('InspectionLengths').bulkWrite
    ).toHaveBeenCalledWith(expect.any(Array))
    expect(result).toEqual(mockResult) // Expecting the result from bulkWrite
  })

  it('should handle errors thrown by bulkWrite', async () => {
    // Arrange
    const updateObjects = [
      {
        _id: '603d2f9e6bdf6783c8b58b8b',
        Marshalling: 10,
        Unloading: 5,
        Inspection: 20,
        LoadingAndCleanUp: 15,
        TotalInspectionLength: 50
      }
    ]

    const mockError = new Error('Bulk write error')
    mockDb
      .collection('InspectionLengths')
      .bulkWrite.mockRejectedValue(mockError) // Simulate an error

    // Act & Assert
    await expect(updateInspectionLength(mockDb, updateObjects)).rejects.toThrow(
      'Bulk write error'
    )
  })
})
