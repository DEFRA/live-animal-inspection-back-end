import { deleteInspectionLengthsData } from '~/src/api/configuration/helpers/delete-inspection-lengths'

const deleteInspectionLengthsDataController = {
  handler: async (request, h) => {
    await deleteInspectionLengthsData(request.db)

    return h
      .response({
        message: `Collection - InspectionLength dropped successfully`
      })
      .code(200)
  }
}

export { deleteInspectionLengthsDataController }
