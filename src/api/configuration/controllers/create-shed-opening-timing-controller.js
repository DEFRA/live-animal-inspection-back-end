import { createShedOpeningTimingData } from '~/src/api/configuration/helpers/create-shed-opening-timing'

const createShedOpeningTimingsDataController = {
  handler: async (request, h) => {
    const result = await createShedOpeningTimingData(request.db)

    return h
      .response({
        message: 'Shed opening timings inserted successfully',
        insertedCount: result.insertedCount
      })
      .code(201)
  }
}

export { createShedOpeningTimingsDataController }
