import { deleteShedOpeningTimingData } from '~/src/api/configuration/helpers/delete-shed-opening-timing'

const mockDb = {
  collection: jest.fn().mockReturnThis(),
  drop: jest.fn()
}

describe('deleteShedOpeningTimingData', () => {
  it('should call drop on the ShedOpeningTimings collection', async () => {
    await deleteShedOpeningTimingData(mockDb)

    expect(mockDb.collection).toHaveBeenCalledWith('ShedOpeningTimings')
    expect(mockDb.drop).toHaveBeenCalled()
  })
})
