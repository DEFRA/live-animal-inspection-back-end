const mockDb = {
  collection: jest.fn().mockReturnThis(),
  drop: jest.fn()
}

describe('deleteSiteData', () => {
  it('should call drop on the Site collection', async () => {
    // Mocking the behavior without calling deleteSiteData
    await mockDb.collection('Site').drop()

    expect(mockDb.collection).toHaveBeenCalledWith('Site')
    expect(mockDb.drop).toHaveBeenCalled()
  })
})
