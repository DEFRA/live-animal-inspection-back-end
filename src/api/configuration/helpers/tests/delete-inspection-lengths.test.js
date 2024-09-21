import { deleteInspectionLengthsData } from '~/src/api/configuration/helpers/delete-inspection-lengths'

const mockDb = {
  collection: jest.fn().mockReturnThis(),
  drop: jest.fn()
}

describe('deleteInspectionLengthsData', () => {
  it('should call drop on the InspectionLengths collection', async () => {
    await deleteInspectionLengthsData(mockDb)

    expect(mockDb.collection).toHaveBeenCalledWith('InspectionLengths')
    expect(mockDb.drop).toHaveBeenCalled()
  })
})
