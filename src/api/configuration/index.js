import {
  createSiteDataController,
  deleteSiteDataController,
  createShedOpeningTimingsDataController,
  deleteShedOpeningTimingsDataController,
  createInspectionLengthsDataController,
  deleteInspectionLengthsDataController,
  createBiosecuirityStandStillTimeDataController,
  deleteBiosecuirityStandStillTimeDataController
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

const bioSecuirityStandStillTimeData = {
  plugin: {
    name: 'bioSecuirityStandStillTimeData',
    register: async (server) => {
      server.route([
        {
          method: 'POST',
          path: '/bioSecuirityStandStillTimeData',
          ...createBiosecuirityStandStillTimeDataController
        },
        {
          method: 'DELETE',
          path: '/bioSecuirityStandStillTimeData',
          ...deleteBiosecuirityStandStillTimeDataController
        }
      ])
    }
  }
}
export {
  siteData,
  shedOpeningTimingsData,
  inspectionLengthsData,
  bioSecuirityStandStillTimeData
}
