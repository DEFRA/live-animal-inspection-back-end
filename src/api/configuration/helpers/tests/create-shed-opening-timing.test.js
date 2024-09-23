import { createShedOpeningTimingData } from '~/src/api/configuration/helpers/create-shed-opening-timing'

const mockDb = {
  collection: jest.fn().mockReturnThis(),
  insertMany: jest.fn()
}

describe('createShedOpeningTimingData', () => {
  it('should call insertMany with the correct data', async () => {
    const expectedData = [
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        Day: 'Monday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        Day: 'Tuesday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        Day: 'Wednesday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        Day: 'Thursday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        Day: 'Friday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        Day: 'Saturday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 1,
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        Day: 'Sunday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        Day: 'Monday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        Day: 'Tuesday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        Day: 'Wednesday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        Day: 'Thursday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        Day: 'Friday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        Day: 'Saturday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 2,
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        Day: 'Sunday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 3,
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        Day: 'Monday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 3,
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        Day: 'Tuesday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 3,
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        Day: 'Wednesday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 3,
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        Day: 'Thursday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 3,
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        Day: 'Friday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 3,
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        Day: 'Saturday',
        From: '6 am',
        To: '8 pm'
      },
      {
        ShedId: 3,
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        Day: 'Sunday',
        From: '6 am',
        To: '8 pm'
      }
    ]

    await createShedOpeningTimingData(mockDb)

    expect(mockDb.collection).toHaveBeenCalledWith('ShedOpeningTimings')
    expect(mockDb.insertMany).toHaveBeenCalledWith(expectedData)
  })
})
