import { createShedOpeningTimingsDataController } from '~/src/api/configuration/controllers/create-shed-opening-timing-controller'
import { createShedOpeningTimingData } from '~/src/api/configuration/helpers/create-shed-opening-timing'

jest.mock('~/src/api/configuration/helpers/create-shed-opening-timing')

describe('#createShedOpeningTimingData', () => {
  let request, h

  beforeEach(() => {
    // Mocking request object
    request = {
      db: {}
    }

    // Mocking response toolkit
    h = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }
  })

  it('should return a successful response with the inserted count when data is inserted successfully', async () => {
    // Mock the createShedOpeningTimingData to return a successful result
    const mockResult = { insertedCount: 5 }
    createShedOpeningTimingData.mockResolvedValue(mockResult)

    // Call the handler
    await createShedOpeningTimingsDataController.handler(request, h)

    // Assertions
    expect(createShedOpeningTimingData).toHaveBeenCalledWith(request.db)
    expect(h.response).toHaveBeenCalledWith({
      message: 'Shed opening timings inserted successfully',
      insertedCount: mockResult.insertedCount
    })
    expect(h.code).toHaveBeenCalledWith(201)
  })

  it('should handle errors gracefully', async () => {
    // Mock the createShedOpeningTimingData to throw an error
    createShedOpeningTimingData.mockRejectedValue(new Error('Database error'))

    // Act & Assert: Check that the handler throws an error
    await expect(
      createShedOpeningTimingsDataController.handler(request, h)
    ).rejects.toThrow('Database error')

    // Ensure that createShedOpeningTimingData was called before the error was thrown
    expect(createShedOpeningTimingData).toHaveBeenCalledWith(request.db)
  })
})
