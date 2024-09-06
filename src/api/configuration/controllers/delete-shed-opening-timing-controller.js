import { deleteShedOpeningTimingData } from '~/src/api/configuration/helpers/delete-shed-opening-timing'

const deleteShedOpeningTimingsDataController = {
  handler: async (request, h) => {
    await deleteShedOpeningTimingData(request.db)

    return h
      .response({
        message: `Collection - ShedOpeningTimings dropped successfully`
      })
      .code(200)
  }
}

export { deleteShedOpeningTimingsDataController }
