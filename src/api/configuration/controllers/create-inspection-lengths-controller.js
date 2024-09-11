import { createInspectionLengthsData } from '~/src/api/configuration/helpers/create-inspection-lengths'

const createInspectionLengthsDataController = {
  handler: async (request, h) => {
    const result = await createInspectionLengthsData(request.db)

    return h
      .response({
        message: 'Inspection Lengths data inserted successfully',
        insertedCount: result.insertedCount
      })
      .code(201)
  }
}

export { createInspectionLengthsDataController }
