async function getShedOpeningTiming(db, siteId) {
  const id = parseInt(siteId)
  return await db
    .collection('ShedOpeningTimings')
    .find({ SiteId: id })
    .toArray()
}

export { getShedOpeningTiming }
