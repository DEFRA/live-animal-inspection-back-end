import { getShedOpeningTiming } from '~/src/api/shed/helpers/get-shed-opening-timings'

const getShedOpeningTimingController = {
  handler: async (request, h) => {
    const shedOpeningTiming = await getShedOpeningTiming(
      request.db,
      request.params.siteId
    )

    return h.response({ message: 'success', shedOpeningTiming }).code(200)
  }
}

export { getShedOpeningTimingController }
