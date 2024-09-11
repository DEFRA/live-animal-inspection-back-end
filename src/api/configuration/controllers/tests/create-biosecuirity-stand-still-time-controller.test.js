import { createBiosecuirityStandStillTimeData } from '~/src/api/configuration/helpers/create-biosecuirity-stand-still-time'
import { createBiosecuirityStandStillTimeDataController } from '~/src/api/configuration/controllers/create-biosecuirity-stand-still-time-controller'

jest.mock(
  '~/src/api/configuration/helpers/create-biosecuirity-stand-still-time'
)

describe('#createBiosecuirityStandStillTimeDataController', () => {
  let h

  beforeEach(() => {
    h = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return 201 and success message on successful insert', async () => {
    createBiosecuirityStandStillTimeData.mockResolvedValue({ insertedCount: 5 })

    const request = {
      db: {} // Mock DB connection object
    }

    // Call the controller handler
    await createBiosecuirityStandStillTimeDataController.handler(request, h)

    // Check that h.response is called with the expected response data
    expect(h.response).toHaveBeenCalledWith({
      message: 'Biosecuirity stand still time data inserted successfully',
      insertedCount: 5
    })

    // Check that the status code is set to 201
    expect(h.code).toHaveBeenCalledWith(201)
  })

  it('should throw an error when createBiosecuirityStandStillTimeData fails', async () => {
    // Mock the createBiosecuirityStandStillTimeData function to throw an error
    createBiosecuirityStandStillTimeData.mockRejectedValue(
      new Error('Database error')
    )

    // Simulate the request object with a mock database connection
    const request = {
      db: {} // Mock DB connection object
    }

    // Expect the handler to throw an error
    await expect(
      createBiosecuirityStandStillTimeDataController.handler(request, h)
    ).rejects.toThrow('Database error')

    // Ensure response and code were never called due to error
    expect(h.response).not.toHaveBeenCalled()
    expect(h.code).not.toHaveBeenCalled()
  })
})
