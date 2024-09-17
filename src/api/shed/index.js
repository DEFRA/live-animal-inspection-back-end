import { getShedOpeningTimingController } from '~/src/api/shed/controllers'

const shedData = {
  plugin: {
    name: 'shedData',
    register: async (server) => {
      server.route([
        {
          method: 'GET',
          path: '/shedOpeningTimingBySiteId/{siteId}',
          ...getShedOpeningTimingController
        }
      ])
    }
  }
}

export { shedData }
