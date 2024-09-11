import { createSiteDataController } from '~/src/api/configuration/controllers/create-site-data-controller'
import { createSiteData } from '~/src/api/configuration/helpers/create-site-data'

jest.mock('~/src/api/configuration/helpers/create-site-data', () => ({
  createSiteData: jest.fn()
}))

describe('#createSiteDataController', () => {
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

  it('should insert site data and return a success message with status 201', async () => {
    // Arrange: Mock the createSiteData to return a successful result
    const mockResult = { insertedCount: 5 }
    createSiteData.mockResolvedValue(mockResult)

    // Act: Call the handler function
    await createSiteDataController.handler(request, h)

    // Assert: Ensure createSiteData was called with request.db
    expect(createSiteData).toHaveBeenCalledWith(request.db)

    // Assert: Ensure h.response and h.code were called correctly
    expect(h.response).toHaveBeenCalledWith({
      message: 'Sites inserted successfully',
      insertedCount: 5
    })
    expect(h.code).toHaveBeenCalledWith(201)
  })

  it('should handle errors and throw if createSiteData fails', async () => {
    // Arrange: Mock the createSiteData to reject with an error
    const mockError = new Error('Database error')
    createSiteData.mockRejectedValue(mockError)

    // Act & Assert: Ensure the handler throws an error
    await expect(createSiteDataController.handler(request, h)).rejects.toThrow(
      'Database error'
    )

    // Assert: Ensure createSiteData was called with request.db
    expect(createSiteData).toHaveBeenCalledWith(request.db)
  })
})
