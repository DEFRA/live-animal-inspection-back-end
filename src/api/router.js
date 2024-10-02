import { health } from '~/src/api/health'
import {
  siteData,
  shedOpeningTimingsData,
  inspectionLengthsData,
  bioSecuirityStandStillTimeData
} from '~/src/api/configuration'
import { shedData } from '~/src/api/shed'
import { inspectionLength } from '~/src/api/inspection'

const router = {
  plugin: {
    name: 'Router',
    register: async (server) => {
      // Health-check route. Used by platform to check if service is running, do not remove!
      await server.register([health])

      // Application specific routes, add your own routes here.
      await server.register([siteData])
      await server.register([shedOpeningTimingsData])
      await server.register([inspectionLengthsData])
      await server.register([bioSecuirityStandStillTimeData])
      await server.register([shedData])
      await server.register([inspectionLength])
    }
  }
}

export { router }
