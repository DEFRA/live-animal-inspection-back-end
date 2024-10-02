import { updateInspectionLength } from '~/src/api/inspection/helpers/update-inspection-length'

const updateInspectionLengthController = {
  handler: async (request, h) => {
    const { inspectionLengthObject } = request.payload
    const result = await updateInspectionLength(
      request.db,
      inspectionLengthObject
    )

    return h.response({ message: 'success', result }).code(200)
  }
}

export { updateInspectionLengthController }
