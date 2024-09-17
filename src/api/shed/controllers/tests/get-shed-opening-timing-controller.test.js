import { getShedOpeningTiming } from '~/src/api/shed/helpers/get-shed-opening-timings'
import { getShedOpeningTimingController } from '~/src/api/shed/controllers/get-shed-opening-timing-controller'

jest.mock('~/src/api/shed/helpers/get-shed-opening-timings')

describe('#getShedOpeningTimingController', () => {
  let mockRequest
  let mockResponseToolkit
  let mockShedOpeningTiming

  beforeEach(() => {
    mockShedOpeningTiming = [
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Main Shed',
        Day: 'Monday',
        From: '09:00',
        To: '17:00'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Secondary Shed',
        Day: 'Tuesday',
        From: '10:00',
        To: '18:00'
      }
    ]

    getShedOpeningTiming.mockResolvedValue(mockShedOpeningTiming)

    // Mock the request object
    mockRequest = {
      db: {},
      params: {
        siteId: 1
      }
    }

    // Mock the h.response toolkit
    mockResponseToolkit = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }
  })

  afterEach(() => {
    jest.clearAllMocks() // Clear mocks after each test
  })

  test('should return 200 and correct shed opening timing data', async () => {
    // Call the handler method in the controller
    await getShedOpeningTimingController.handler(
      mockRequest,
      mockResponseToolkit
    )

    // Assertions
    expect(getShedOpeningTiming).toHaveBeenCalledWith(
      mockRequest.db,
      mockRequest.params.siteId
    ) // Check if getShedOpeningTiming is called with correct arguments

    expect(mockResponseToolkit.response).toHaveBeenCalledWith({
      message: 'success',
      shedOpeningTiming: mockShedOpeningTiming
    }) // Check if response contains correct data

    expect(mockResponseToolkit.code).toHaveBeenCalledWith(200) // Check if response status is 200
  })
})
