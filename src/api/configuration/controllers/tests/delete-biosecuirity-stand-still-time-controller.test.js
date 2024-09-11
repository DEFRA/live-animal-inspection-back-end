import { deleteBiosecuirityStandStillTimeData } from '~/src/api/configuration/helpers/delete-biosecuirity-stand-still-time'
import { deleteBiosecuirityStandStillTimeDataController } from '~/src/api/configuration/controllers/delete-biosecuirity-stand-still-time-controller'

jest.mock(
  '~/src/api/configuration/helpers/delete-biosecuirity-stand-still-time'
)

describe('deleteBiosecuirityStandStillTimeDataController', () => {
  let h

  beforeEach(() => {
    h = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }
  })

  afterEach(() => {
    jest.clearAllMocks() // Clear mocks after each test
  })

  it('should return 200 and success message when the collection is dropped successfully', async () => {
    // Mock the deleteBiosecuirityStandStillTimeData function to resolve successfully
    deleteBiosecuirityStandStillTimeData.mockResolvedValue()

    // Simulate the request object with a mock database connection
    const request = {
      db: {} // Mock DB connection object
    }

    // Call the controller handler
    await deleteBiosecuirityStandStillTimeDataController.handler(request, h)

    // Verify h.response is called with the expected response object
    expect(h.response).toHaveBeenCalledWith({
      message: 'Collection - BiosecuirityStandStillTime dropped successfully'
    })

    // Verify the status code is set to 200
    expect(h.code).toHaveBeenCalledWith(200)
  })

  it('should throw an error if deleteBiosecuirityStandStillTimeData fails', async () => {
    // Mock the deleteBiosecuirityStandStillTimeData function to throw an error
    deleteBiosecuirityStandStillTimeData.mockRejectedValue(
      new Error('Database error')
    )

    const request = {
      db: {}
    }

    // Expect the handler to throw an error
    await expect(
      deleteBiosecuirityStandStillTimeDataController.handler(request, h)
    ).rejects.toThrow('Database error')

    // Ensure response and code were not called due to error
    expect(h.response).not.toHaveBeenCalled()
    expect(h.code).not.toHaveBeenCalled()
  })
})
