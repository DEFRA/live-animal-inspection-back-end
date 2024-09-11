import { deleteShedOpeningTimingsDataController } from '~/src/api/configuration/controllers/delete-shed-opening-timing-controller'
import { deleteShedOpeningTimingData } from '~/src/api/configuration/helpers/delete-shed-opening-timing'

jest.mock('~/src/api/configuration/helpers/delete-shed-opening-timing', () => ({
  deleteShedOpeningTimingData: jest.fn()
}))

describe('#deleteShedOpeningTimingData', () => {
  let request, h

  beforeEach(() => {
    request = {
      db: {}
    }

    h = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should delete shed opening timings and return a success message with status 200', async () => {
    // Arrange: Mock the deleteShedOpeningTimingData to be a resolved promise
    deleteShedOpeningTimingData.mockResolvedValue()

    // Act: Call the handler function
    await deleteShedOpeningTimingsDataController.handler(request, h)

    // Assert: Check if deleteShedOpeningTimingData was called with the correct argument
    expect(deleteShedOpeningTimingData).toHaveBeenCalledWith(request.db)

    // Assert: Check if h.response and h.code were called correctly
    expect(h.response).toHaveBeenCalledWith({
      message: 'Collection - ShedOpeningTimings dropped successfully'
    })
    expect(h.code).toHaveBeenCalledWith(200)
  })

  it('should handle errors and throw an error if deleteShedOpeningTimingData fails', async () => {
    // Arrange: Mock the deleteShedOpeningTimingData to reject
    deleteShedOpeningTimingData.mockRejectedValue(new Error('Failed to delete'))

    // Act & Assert: Expect the handler to throw an error
    await expect(
      deleteShedOpeningTimingsDataController.handler(request, h)
    ).rejects.toThrow('Failed to delete')

    // Assert: Check if deleteShedOpeningTimingData was called with the correct argument
    expect(deleteShedOpeningTimingData).toHaveBeenCalledWith(request.db)
  })
})
