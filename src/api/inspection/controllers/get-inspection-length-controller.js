import { getInspectionLength } from '~/src/api/inspection/helpers/get-inspection-length'

const getInspectionLengthController = {
  handler: async (request, h) => {
    const result = await getInspectionLength(request.db, request.params.siteId)

    return h.response({ message: 'success', result }).code(200)
  }
}

export { getInspectionLengthController }
