import { createBiosecuirityStandStillTimeData } from '~/src/api/configuration/helpers/create-biosecuirity-stand-still-time'

const createBiosecuirityStandStillTimeDataController = {
  handler: async (request, h) => {
    const result = await createBiosecuirityStandStillTimeData(request.db)

    return h
      .response({
        message: 'Biosecuirity stand still time data inserted successfully',
        insertedCount: result.insertedCount
      })
      .code(201)
  }
}

export { createBiosecuirityStandStillTimeDataController }
