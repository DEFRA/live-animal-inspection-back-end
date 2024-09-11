import { deleteSiteDataController } from '~/src/api/configuration/controllers/delete-site-data-controller'
import { deleteSiteData } from '~/src/api/configuration/helpers/delete-site-data'

jest.mock('~/src/api/configuration/helpers/delete-site-data', () => ({
  deleteSiteData: jest.fn()
}))

describe('#deleteSiteDataController', () => {
  let request, h

  beforeEach(() => {
    request = {
      db: {} // Mock the request.db object
    }

    h = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should delete site data and return a success message with status 200', async () => {
    // Arrange: Mock deleteSiteData to resolve without error
    deleteSiteData.mockResolvedValue()

    // Act: Call the handler function
    await deleteSiteDataController.handler(request, h)

    // Assert: Ensure deleteSiteData was called with request.db
    expect(deleteSiteData).toHaveBeenCalledWith(request.db)

    // Assert: Ensure h.response and h.code were called correctly
    expect(h.response).toHaveBeenCalledWith({
      message: 'Collection - Site dropped successfully'
    })
    expect(h.code).toHaveBeenCalledWith(200)
  })

  it('should handle errors and throw if deleteSiteData fails', async () => {
    // Arrange: Mock deleteSiteData to reject with an error
    const mockError = new Error('Database error')
    deleteSiteData.mockRejectedValue(mockError)

    // Act & Assert: Ensure the handler throws an error
    await expect(deleteSiteDataController.handler(request, h)).rejects.toThrow(
      'Database error'
    )

    // Assert: Ensure deleteSiteData was called with request.db
    expect(deleteSiteData).toHaveBeenCalledWith(request.db)
  })
})
