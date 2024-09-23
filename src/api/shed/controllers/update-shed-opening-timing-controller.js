import { updateShedOpeningTiming } from '~/src/api/shed/helpers/update-shed-opening-timings'

const updateShedOpeningTimingController = {
  handler: async (request, h) => {
    const { id, from, to } = request.payload
    await updateShedOpeningTiming(request.db, id, from, to)

    return h.response({ message: 'success', updateShedOpeningTiming }).code(200)
  }
}

export { updateShedOpeningTimingController }
