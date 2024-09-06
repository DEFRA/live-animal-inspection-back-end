import { deleteSiteData } from '~/src/api/configuration/helpers/delete-site-data'

const deleteSiteDataController = {
  handler: async (request, h) => {
    await deleteSiteData(request.db)

    return h
      .response({ message: `Collection - Site dropped successfully` })
      .code(200)
  }
}

export { deleteSiteDataController }
