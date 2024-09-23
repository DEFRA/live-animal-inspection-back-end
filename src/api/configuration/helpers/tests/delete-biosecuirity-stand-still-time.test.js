import { deleteBiosecuirityStandStillTimeData } from '~/src/api/configuration/helpers/delete-biosecuirity-stand-still-time'

const mockDb = {
  collection: jest.fn().mockReturnThis(),
  drop: jest.fn()
}

describe('deleteBiosecuirityStandStillTimeData', () => {
  it('should call drop on the BiosecuirityStandStillTime collection', async () => {
    await deleteBiosecuirityStandStillTimeData(mockDb)

    expect(mockDb.collection).toHaveBeenCalledWith('BiosecuirityStandStillTime')
    expect(mockDb.drop).toHaveBeenCalled()
  })
})
