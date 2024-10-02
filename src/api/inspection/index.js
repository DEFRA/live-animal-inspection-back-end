import {
  getInspectionLengthController,
  updateInspectionLengthController
} from '~/src/api/inspection/controllers'

const inspectionLength = {
  plugin: {
    name: 'inspectionLength',
    register: async (server) => {
      server.route([
        {
          method: 'GET',
          path: '/getInspectionLengthBySiteId/{siteId}',
          ...getInspectionLengthController
        },
        {
          method: 'POST',
          path: '/updateInspectionLengthById',
          ...updateInspectionLengthController
        }
      ])
    }
  }
}

export { inspectionLength }
