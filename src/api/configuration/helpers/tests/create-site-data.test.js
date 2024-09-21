const mockDb = {
  collection: jest.fn().mockReturnThis(),
  insertMany: jest.fn()
}

const sites = [
  {
    _id: 1,
    SiteName: 'Sevington, England',
    Operational: true,
    Sheds: [
      {
        ShedId: 1,
        ShedName: 'Shed C',
        ShedDisplayName: 'Shed C: Small animals',
        Operations: true,
        Bays: [
          { BayId: 1, BayName: 'Bay 1', Operational: true },
          { BayId: 2, BayName: 'Bay 2', Operational: true },
          { BayId: 3, BayName: 'Bay 3', Operational: true },
          { BayId: 4, BayName: 'Bay 4', Operational: true },
          { BayId: 5, BayName: 'Bay 5', Operational: true },
          { BayId: 6, BayName: 'Bay 6', Operational: true },
          { BayId: 7, BayName: 'Bay 7', Operational: true },
          { BayId: 8, BayName: 'Bay 8', Operational: true }
        ]
      },
      {
        ShedId: 2,
        ShedName: 'Shed D',
        ShedDisplayName: 'Shed D: Equine',
        Operations: true,
        Bays: [
          { BayId: 9, BayName: 'Bay 1', Operational: true },
          { BayId: 10, BayName: 'Bay 2', Operational: true }
        ]
      },
      {
        ShedId: 3,
        ShedName: 'Shed E',
        ShedDisplayName: 'Shed E: Livestock',
        Operations: true,
        Bays: [
          { BayId: 11, BayName: 'Bay 1', Operational: true },
          { BayId: 12, BayName: 'Bay 2', Operational: true }
        ]
      }
    ]
  }
]

describe('createSiteData', () => {
  it('should insert site data into the database', async () => {
    const mockInsertResult = { insertedCount: sites.length }
    mockDb.insertMany.mockResolvedValue(mockInsertResult)

    const result = await mockDb.collection('Site').insertMany(sites)

    expect(mockDb.collection).toHaveBeenCalledWith('Site')
    expect(mockDb.insertMany).toHaveBeenCalledWith(sites)
    expect(result).toEqual(mockInsertResult)
  })
})
