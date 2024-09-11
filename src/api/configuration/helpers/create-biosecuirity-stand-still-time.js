async function createBiosecuirityStandStillTimeData(db) {
  try {
    const biosecuirityStandStillTimeData = [
      {
        ShedId: 'Shed1',
        AnimalType: 'Captive birds',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Cats',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Dogs',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Ferrets',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Live fish',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Aquatics',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed1',
        AnimalType: 'Monkeys',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Equidae',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Ungulates - Camelids',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Ungulates - Alpacas',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed2',
        AnimalType: 'Ungulates - Deer',
        StandStillTime: 0
      },

      {
        ShedId: 'Shed3',
        AnimalType: 'Cattle',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - bison',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - sheep',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - goats',
        StandStillTime: 0
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - pigs',
        StandStillTime: 4320
      },
      {
        ShedId: 'Shed3',
        AnimalType: 'Farmed livestock - wild boar',
        StandStillTime: 4320
      }
    ]

    const result = await db
      .collection('BiosecuirityStandStillTime')
      .insertMany(biosecuirityStandStillTimeData)
    return result
  } catch (err) {}
}

export { createBiosecuirityStandStillTimeData }
