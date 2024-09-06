import {
  createSiteDataController,
  deleteSiteDataController
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

export { siteData }
