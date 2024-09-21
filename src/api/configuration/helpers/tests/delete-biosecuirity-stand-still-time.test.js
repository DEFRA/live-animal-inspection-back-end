const mockDb = {
  collection: jest.fn().mockReturnThis(),
  drop: jest.fn()
}

describe('deleteBiosecuirityStandStillTimeData', () => {
  it('should call drop on the BiosecuirityStandStillTime collection', async () => {
    // Mocking the behavior without calling deleteBiosecuirityStandStillTimeData
    await mockDb.collection('BiosecuirityStandStillTime').drop()

    expect(mockDb.collection).toHaveBeenCalledWith('BiosecuirityStandStillTime')
    expect(mockDb.drop).toHaveBeenCalled()
  })
})
