import { deleteBiosecuirityStandStillTimeData } from '~/src/api/configuration/helpers/delete-biosecuirity-stand-still-time'

const deleteBiosecuirityStandStillTimeDataController = {
  handler: async (request, h) => {
    await deleteBiosecuirityStandStillTimeData(request.db)

    return h
      .response({
        message: `Collection - BiosecuirityStandStillTime dropped successfully`
      })
      .code(200)
  }
}

export { deleteBiosecuirityStandStillTimeDataController }
