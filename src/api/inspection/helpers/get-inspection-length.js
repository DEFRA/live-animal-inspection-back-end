async function getInspectionLength(db, siteId) {
  const id = parseInt(siteId)
  return await db.collection('InspectionLengths').find({ SiteId: id }).toArray()
}

export { getInspectionLength }
