/**
 * Finds and returns a single example record from mongodb.
 * See src/server/helpers/mongodb.js for an example of how the indexes are created for this collection.
 */
async function deleteSiteData(db, id) {
  return await db.collection('Site').drop()
}

export { deleteSiteData }
