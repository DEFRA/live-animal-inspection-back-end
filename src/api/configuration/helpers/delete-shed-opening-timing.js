async function deleteShedOpeningTimingData(db) {
  return await db.collection('ShedOpeningTimings').drop()
}

export { deleteShedOpeningTimingData }
