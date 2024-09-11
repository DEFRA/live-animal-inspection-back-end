async function deleteInspectionLengthsData(db) {
  return await db.collection('InspectionLengths').drop()
}

export { deleteInspectionLengthsData }
