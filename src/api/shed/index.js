import {
  getShedOpeningTimingController,
  updateShedOpeningTimingController
} from '~/src/api/shed/controllers'

const shedData = {
  plugin: {
    name: 'shedData',
    register: async (server) => {
      server.route([
        {
          method: 'GET',
          path: '/shedOpeningTimingBySiteId/{siteId}',
          ...getShedOpeningTimingController
        },
        {
          method: 'POST',
          path: '/updateShedOpeningTimingById',
          ...updateShedOpeningTimingController
        }
      ])
    }
  }
}

export { shedData }
