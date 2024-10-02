import { getInspectionLength } from '~/src/api/inspection/helpers/get-inspection-length'

describe('getInspectionLength', () => {
  let mockDb

  beforeEach(() => {
    // Create a mock database object
    mockDb = {
      collection: jest.fn().mockReturnValue({
        find: jest.fn().mockReturnValue({
          toArray: jest.fn()
        })
      })
    }
  })

  it('should return an array of inspection lengths for a valid siteId', async () => {
    // Arrange
    const siteId = '123' // Example siteId as a string
    const expectedResult = [{ length: 10 }, { length: 15 }] // Example expected result
    mockDb
      .collection('InspectionLengths')
      .find()
      .toArray.mockResolvedValue(expectedResult)

    // Act
    const result = await getInspectionLength(mockDb, siteId)

    // Assert
    expect(mockDb.collection).toHaveBeenCalledWith('InspectionLengths')
    expect(mockDb.collection('InspectionLengths').find).toHaveBeenCalledWith({
      SiteId: 123
    })
    expect(result).toEqual(expectedResult)
  })

  it('should return an empty array if no records found for siteId', async () => {
    // Arrange
    const siteId = '456' // Another example siteId
    mockDb.collection('InspectionLengths').find().toArray.mockResolvedValue([])

    // Act
    const result = await getInspectionLength(mockDb, siteId)

    // Assert
    expect(mockDb.collection).toHaveBeenCalledWith('InspectionLengths')
    expect(mockDb.collection('InspectionLengths').find).toHaveBeenCalledWith({
      SiteId: 456
    })
    expect(result).toEqual([]) // Expecting an empty array
  })

  it('should handle errors thrown by the database', async () => {
    // Arrange
    const siteId = '123' // Example siteId
    const mockError = new Error('Database error')
    mockDb
      .collection('InspectionLengths')
      .find()
      .toArray.mockRejectedValue(mockError)

    // Act & Assert
    await expect(getInspectionLength(mockDb, siteId)).rejects.toThrow(
      'Database error'
    )
  })
})
