import { updateShedOpeningTiming } from '~/src/api/shed/helpers/update-shed-opening-timings'
import { updateShedOpeningTimingController } from '~/src/api/shed/controllers/update-shed-opening-timing-controller'

// Jest mock for the updateShedOpeningTiming function
jest.mock('~/src/api/shed/helpers/update-shed-opening-timings', () => ({
  updateShedOpeningTiming: jest.fn()
}))

describe('updateShedOpeningTimingController', () => {
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

  it('should successfully update shed opening timing and return 200 status code', async () => {
    // Arrange
    const mockRequest = {
      payload: {
        id: 1,
        from: '09:00',
        to: '18:00'
      },
      db: {}
    }

    // Act
    await updateShedOpeningTimingController.handler(mockRequest, h)

    // Assert
    expect(updateShedOpeningTiming).toHaveBeenCalledWith(
      mockRequest.db,
      1,
      '09:00',
      '18:00'
    )
    expect(h.response).toHaveBeenCalledWith({
      message: 'success',
      updateShedOpeningTiming
    })
    expect(h.code).toHaveBeenCalledWith(200)
  })
})
