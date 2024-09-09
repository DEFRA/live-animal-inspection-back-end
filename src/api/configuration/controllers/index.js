import { createSiteDataController } from '~/src/api/configuration/controllers/create-site-data-controller'
import { deleteSiteDataController } from '~/src/api/configuration/controllers/delete-site-data-controller'
import { createShedOpeningTimingsDataController } from '~/src/api/configuration/controllers/create-shed-opening-timing-controller'
import { deleteShedOpeningTimingsDataController } from '~/src/api/configuration/controllers/delete-shed-opening-timing-controller'
import { createInspectionLengthsDataController } from '~/src/api/configuration/controllers/create-inspection-lengths-controller'
import { deleteInspectionLengthsDataController } from '~/src/api/configuration/controllers/delete-inspection-length-controller'

export {
  createSiteDataController,
  deleteSiteDataController,
  createShedOpeningTimingsDataController,
  deleteShedOpeningTimingsDataController,
  createInspectionLengthsDataController,
  deleteInspectionLengthsDataController
}
