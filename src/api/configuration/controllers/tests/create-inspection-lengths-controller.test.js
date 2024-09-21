import { createInspectionLengthsData } from '~/src/api/configuration/helpers/create-inspection-lengths'
import { createInspectionLengthsDataController } from '~/src/api/configuration/controllers/create-inspection-lengths-controller'

jest.mock('~/src/api/configuration/helpers/create-inspection-lengths')

describe('createInspectionLengthsDataController', () => {
  it('should call createInspectionLengthsData and return a success response with insertedCount', async () => {
    const mockRequest = { db: {} }
    const mock = {
      response: jest.fn().mockReturnThis(),
      code: jest.fn()
    }

    const mockResult = { insertedCount: 5 }
    createInspectionLengthsData.mockResolvedValue(mockResult)

    await createInspectionLengthsDataController.handler(mockRequest, mock)

    expect(createInspectionLengthsData).toHaveBeenCalledWith(mockRequest.db)
    expect(mock.response).toHaveBeenCalledWith({
      message: 'Inspection Lengths data inserted successfully',
      insertedCount: mockResult.insertedCount
    })
    expect(mock.code).toHaveBeenCalledWith(201)
  })
})
