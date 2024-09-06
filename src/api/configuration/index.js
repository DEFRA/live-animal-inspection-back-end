import {
  createSiteDataController,
  deleteSiteDataController,
  createShedOpeningTimingsDataController,
  deleteShedOpeningTimingsDataController
} from '~/src/api/configuration/controllers'

const siteData = {
  plugin: {
    name: 'siteData',
    register: async (server) => {
      server.route([
        {
          method: 'POST',
          path: '/siteData',
          ...createSiteDataController
        },
        {
          method: 'DELETE',
          path: '/siteData',
          ...deleteSiteDataController
        }
      ])
    }
  }
}

const shedOpeningTimingsData = {
  plugin: {
    name: 'shedOpeningTimingsData',
    register: async (server) => {
      server.route([
        {
          method: 'POST',
          path: '/shedOpeningTimings',
          ...createShedOpeningTimingsDataController
        },
        {
          method: 'DELETE',
          path: '/shedOpeningTimings',
          ...deleteShedOpeningTimingsDataController
        }
      ])
    }
  }
}

export { siteData, shedOpeningTimingsData }
