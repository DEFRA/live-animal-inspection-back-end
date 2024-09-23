import { deleteSiteData } from '~/src/api/configuration/helpers/delete-site-data'

const mockDb = {
  collection: jest.fn().mockReturnThis(),
  drop: jest.fn()
}

describe('deleteSiteData', () => {
  it('should call drop on the Site collection', async () => {
    await deleteSiteData(mockDb, 1) // The ID is not used in the current function, but passed for completeness

    expect(mockDb.collection).toHaveBeenCalledWith('Site')
    expect(mockDb.drop).toHaveBeenCalled()
  })
})
