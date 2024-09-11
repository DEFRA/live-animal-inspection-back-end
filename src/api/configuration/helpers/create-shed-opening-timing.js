import { createLogger } from '~/src/helpers/logging/logger'
const logger = createLogger()

async function createShedOpeningTimingData(db) {
  try {
    const shedOpeningTimingsData = [
      { ShedId: 1, Day: 'Monday', From: '6 am', To: '8 pm' },
      { ShedId: 1, Day: 'Tuesday', From: '6 am', To: '8 pm' },
      { ShedId: 1, Day: 'Wednesday', From: '6 am', To: '8 pm' },
      { ShedId: 1, Day: 'Thursday', From: '6 am', To: '8 pm' },
      { ShedId: 1, Day: 'Friday', From: '6 am', To: '8 pm' },
      { ShedId: 1, Day: 'Saturday', From: '6 am', To: '8 pm' },
      { ShedId: 1, Day: 'Sunday', From: '6 am', To: '8 pm' },
      { ShedId: 2, Day: 'Monday', From: '6 am', To: '8 pm' },
      { ShedId: 2, Day: 'Tuesday', From: '6 am', To: '8 pm' },
      { ShedId: 2, Day: 'Wednesday', From: '6 am', To: '8 pm' },
      { ShedId: 2, Day: 'Thursday', From: '6 am', To: '8 pm' },
      { ShedId: 2, Day: 'Friday', From: '6 am', To: '8 pm' },
      { ShedId: 2, Day: 'Saturday', From: '6 am', To: '8 pm' },
      { ShedId: 2, Day: 'Sunday', From: '6 am', To: '8 pm' },
      { ShedId: 3, Day: 'Monday', From: '6 am', To: '8 pm' },
      { ShedId: 3, Day: 'Tuesday', From: '6 am', To: '8 pm' },
      { ShedId: 3, Day: 'Wednesday', From: '6 am', To: '8 pm' },
      { ShedId: 3, Day: 'Thursday', From: '6 am', To: '8 pm' },
      { ShedId: 3, Day: 'Friday', From: '6 am', To: '8 pm' },
      { ShedId: 3, Day: 'Saturday', From: '6 am', To: '8 pm' },
      { ShedId: 3, Day: 'Sunday', From: '6 am', To: '8 pm' }
    ]

    const result = await db
      .collection('ShedOpeningTimings')
      .insertMany(shedOpeningTimingsData)
    return result
  } catch (err) {
    logger.info(`Shed opening timings data insert error: ${err}`)
  }
}

export { createShedOpeningTimingData }
