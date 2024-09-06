import { createSiteData } from '~/src/api/configuration/helpers/create-site-data'

const createSiteDataController = {
  handler: async (request, h) => {
    const result = await createSiteData(request.db)

    return h
      .response({
        message: 'Sites inserted successfully',
        insertedCount: result.insertedCount
      })
      .code(201)
  }
}

export { createSiteDataController }
