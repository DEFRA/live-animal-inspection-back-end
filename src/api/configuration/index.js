import {
  createSiteDataController,
  deleteSiteDataController,
  createShedOpeningTimingsDataController,
  deleteShedOpeningTimingsDataController,
  createInspectionLengthsDataController,
  deleteInspectionLengthsDataController
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

const inspectionLengthsData = {
  plugin: {
    name: 'inspectionLengthsData',
    register: async (server) => {
      server.route([
        {
          method: 'POST',
          path: '/inspectionLengthsData',
          ...createInspectionLengthsDataController
        },
        {
          method: 'DELETE',
          path: '/inspectionLengthsData',
          ...deleteInspectionLengthsDataController
        }
      ])
    }
  }
}

export { siteData, shedOpeningTimingsData, inspectionLengthsData }
