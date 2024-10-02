import { createInspectionLengthsData } from '~/src/api/configuration/helpers/create-inspection-lengths'

const mockDb = {
  collection: jest.fn().mockReturnThis(),
  insertMany: jest.fn()
}

describe('createInspectionLengthsData', () => {
  it('should call insertMany with the correct data', async () => {
    const expectedData = [
      {
        ShedId: 'Shed1',
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        AnimalType: 'Captive birds',
        Marshalling: 30,
        Unloading: 30,
        Inspection: 30,
        LoadingAndCleanUp: 30,
        TotalInspectionLength: 120
      },
      {
        ShedId: 'Shed1',
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        AnimalType: 'Cats',
        Marshalling: 110,
        Unloading: 85,
        Inspection: 70,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 415
      },
      {
        ShedId: 'Shed1',
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        AnimalType: 'Dogs',
        Marshalling: 130,
        Unloading: 100,
        Inspection: 65,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 450
      },
      {
        ShedId: 'Shed1',
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        AnimalType: 'Ferrets',
        Marshalling: 140,
        Unloading: 95,
        Inspection: 80,
        LoadingAndCleanUp: 60,
        TotalInspectionLength: 475
      },
      {
        ShedId: 'Shed1',
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        AnimalType: 'Live fish',
        Marshalling: 100,
        Unloading: 85,
        Inspection: 75,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 410
      },
      {
        ShedId: 'Shed1',
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        AnimalType: 'Aquatics',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed1',
        SiteId: 1,
        ShedName: 'Shed C: Small animals',
        AnimalType: 'Monkeys',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed2',
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        AnimalType: 'Equidae',
        Marshalling: 140,
        Unloading: 95,
        Inspection: 80,
        LoadingAndCleanUp: 60,
        TotalInspectionLength: 475
      },
      {
        ShedId: 'Shed2',
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        AnimalType: 'Ungulates - Camelids',
        Marshalling: 100,
        Unloading: 85,
        Inspection: 75,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 410
      },
      {
        ShedId: 'Shed2',
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        AnimalType: 'Ungulates - Alpacas',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed2',
        SiteId: 1,
        ShedName: 'Shed D: Equine',
        AnimalType: 'Ungulates - Deer',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },

      {
        ShedId: 'Shed3',
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        AnimalType: 'Cattle',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed3',
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        AnimalType: 'Farmed livestock - bison',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed3',
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        AnimalType: 'Farmed livestock - sheep',
        Marshalling: 140,
        Unloading: 95,
        Inspection: 80,
        LoadingAndCleanUp: 60,
        TotalInspectionLength: 475
      },
      {
        ShedId: 'Shed3',
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        AnimalType: 'Farmed livestock - goats',
        Marshalling: 100,
        Unloading: 85,
        Inspection: 75,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 410
      },
      {
        ShedId: 'Shed3',
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        AnimalType: 'Farmed livestock - pigs',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed3',
        SiteId: 1,
        ShedName: 'Shed E: Livestock',
        AnimalType: 'Farmed livestock - wild boar',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      }
    ]

    await createInspectionLengthsData(mockDb)

    expect(mockDb.collection).toHaveBeenCalledWith('InspectionLengths')
    expect(mockDb.insertMany).toHaveBeenCalledWith(expectedData)
  })
})
