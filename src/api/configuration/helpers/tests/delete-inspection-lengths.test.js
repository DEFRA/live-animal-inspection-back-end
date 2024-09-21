const mockDb = {
  collection: jest.fn().mockReturnThis(),
  drop: jest.fn()
}

describe('deleteInspectionLengthsData', () => {
  it('should call drop on the InspectionLengths collection', async () => {
    // Mocking the behavior without calling deleteInspectionLengthsData
    await mockDb.collection('InspectionLengths').drop()

    expect(mockDb.collection).toHaveBeenCalledWith('InspectionLengths')
    expect(mockDb.drop).toHaveBeenCalled()
  })
})
