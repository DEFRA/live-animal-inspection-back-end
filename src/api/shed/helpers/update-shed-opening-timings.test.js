import { updateShedOpeningTiming } from '~/src/api/shed/helpers/update-shed-opening-timings'

jest.mock('mongodb', () => {
  const mCollection = {
    updateOne: jest.fn()
  }
  return {
    ObjectId: jest.fn().mockReturnValue({}),
    MongoClient: {
      connect: jest.fn().mockResolvedValue({
        db: jest.fn().mockReturnValue({
          collection: jest.fn().mockReturnValue(mCollection)
        })
      })
    }
  }
})

describe('updateShedOpeningTiming', () => {
  let db
  let collection

  beforeEach(() => {
    // Mock database and collection
    db = {
      collection: jest.fn().mockReturnValue({
        updateOne: jest.fn()
      })
    }
    collection = db.collection('ShedOpeningTimings')
  })

  afterEach(() => {
    jest.clearAllMocks() // Clear mocks after each test
  })

  it('should update the shed opening timing successfully', async () => {
    // Arrange
    const id = '60b8d9f4f1d7f10015c8a3e2' // Example ObjectId as string
    const from = '09:00'
    const to = '18:00'
    const mockResult = { modifiedCount: 1 }

    collection.updateOne.mockResolvedValue(mockResult)

    // Act
    const result = await updateShedOpeningTiming(db, id, from, to)

    // Assert
    expect(collection.updateOne).toHaveBeenCalledWith(
      { _id: expect.any(Object) },
      {
        $set: {
          From: from,
          To: to
        }
      }
    )
    expect(result).toEqual(mockResult)
  })

  it('should handle errors during update', async () => {
    // Arrange
    const id = '60b8d9f4f1d7f10015c8a3e2' // Example ObjectId as string
    const from = '09:00'
    const to = '18:00'
    const mockError = new Error('Database error')

    collection.updateOne.mockRejectedValue(mockError)

    // Act & Assert
    await expect(updateShedOpeningTiming(db, id, from, to)).rejects.toThrow(
      'Database error'
    )
    expect(collection.updateOne).toHaveBeenCalledWith(
      { _id: expect.any(Object) },
      {
        $set: {
          From: from,
          To: to
        }
      }
    )
  })
})
