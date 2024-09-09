async function createInspectionLengthsData(db) {
  try {
    const inspectionLengthsData = [
      {
        ShedId: 'Shed1',
        AnimalType: 'Captive birds',
        Marshalling: 30,
        Unloading: 30,
        Inspection: 30,
        LoadingAndCleanUp: 30,
        TotalInspectionLength: 120
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Cats',
        Marshalling: 110,
        Unloading: 85,
        Inspection: 70,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 415
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Dogs',
        Marshalling: 130,
        Unloading: 100,
        Inspection: 65,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 450
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Ferrets',
        Marshalling: 140,
        Unloading: 95,
        Inspection: 80,
        LoadingAndCleanUp: 60,
        TotalInspectionLength: 475
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Live fish',
        Marshalling: 100,
        Unloading: 85,
        Inspection: 75,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 410
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Aquatics',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Monkeys',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Equidae',
        Marshalling: 140,
        Unloading: 95,
        Inspection: 80,
        LoadingAndCleanUp: 60,
        TotalInspectionLength: 475
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Ungulates - Camelids',
        Marshalling: 100,
        Unloading: 85,
        Inspection: 75,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 410
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Ungulates - Alpacas',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Ungulates - Deer',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },

      {
        ShedId: 'Shed3',
        AnimalType: 'Cattle',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - bison',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - sheep',
        Marshalling: 140,
        Unloading: 95,
        Inspection: 80,
        LoadingAndCleanUp: 60,
        TotalInspectionLength: 475
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - goats',
        Marshalling: 100,
        Unloading: 85,
        Inspection: 75,
        LoadingAndCleanUp: 50,
        TotalInspectionLength: 410
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - pigs',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - wild boar',
        Marshalling: 125,
        Unloading: 90,
        Inspection: 70,
        LoadingAndCleanUp: 55,
        TotalInspectionLength: 440
      }
    ]

    const result = await db
      .collection('InspectionLengths')
      .insertMany(inspectionLengthsData)
    return result
  } catch (err) {}
}

export { createInspectionLengthsData }
