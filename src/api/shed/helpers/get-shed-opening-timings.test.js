import { getShedOpeningTiming } from '~/src/api/shed/helpers/get-shed-opening-timings'

const mockDb = {
  collection: jest.fn().mockReturnThis(),
  find: jest.fn().mockReturnThis(),
  toArray: jest.fn()
}

describe('getShedOpeningTiming', () => {
  it('should call find with the correct SiteId and return the results', async () => {
    const siteId = '1'
    const expectedResult = [
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C',
        Day: 'Monday',
        From: '6 am',
        To: '8 pm'
      }
    ]

    // Mocking the toArray method to return expected result
    mockDb.toArray.mockResolvedValue(expectedResult)

    const result = await getShedOpeningTiming(mockDb, siteId)

    expect(mockDb.collection).toHaveBeenCalledWith('ShedOpeningTimings')
    expect(mockDb.find).toHaveBeenCalledWith({ SiteId: parseInt(siteId) })
    expect(mockDb.toArray).toHaveBeenCalled()
    expect(result).toEqual(expectedResult)
  })
})
