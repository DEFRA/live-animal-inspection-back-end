import { ObjectId } from 'mongodb'

async function updateInspectionLength(db, updateObjects) {
  const bulkOperations = updateObjects.map((updateObj) => {
    return {
      updateOne: {
        filter: { _id: new ObjectId(updateObj._id) },
        update: {
          $set: {
            Marshalling: updateObj.Marshalling,
            Unloading: updateObj.Unloading,
            Inspection: updateObj.Inspection,
            LoadingAndCleanUp: updateObj.LoadingAndCleanUp,
            TotalInspectionLength: updateObj.TotalInspectionLength
          }
        }
      }
    }
  })

  // Execute the bulk operation
  const result = await db
    .collection('InspectionLengths')
    .bulkWrite(bulkOperations)

  return result
}

export { updateInspectionLength }
