async function createSiteData(db) {
  try {
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
              { BayId: 1001, BayName: 'Bay 1', Operational: true },
              { BayId: 1002, BayName: 'Bay 2', Operational: false }
            ]
          },
          {
            ShedId: 2,
            ShedName: 'Shed D',
            ShedDisplayName: 'Shed D: Equine',
            Operations: false,
            Bays: [{ BayId: 1003, BayName: 'Bay 3', Operational: true }]
          },
          {
            ShedId: 102,
            ShedName: 'Shed E',
            ShedDisplayName: 'Shed E: Livestock',
            Operations: false,
            Bays: [{ BayId: 1003, BayName: 'Bay 4', Operational: true }]
          }
        ]
      }
    ]

    const result = await db.collection('Site').insertMany(sites)
    return result
  } catch (err) {}
}

export { createSiteData }
