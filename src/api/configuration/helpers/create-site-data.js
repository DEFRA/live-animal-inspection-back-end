import { createLogger } from '~/src/helpers/logging/logger'
const logger = createLogger()

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

    const result = await db.collection('Site').insertMany(sites)
    return result
  } catch (err) {
    logger.info(`Site data insert error: ${err}`)
  }
}

export { createSiteData }
