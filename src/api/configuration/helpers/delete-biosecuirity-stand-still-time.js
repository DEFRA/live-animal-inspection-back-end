async function deleteBiosecuirityStandStillTimeData(db) {
  return await db.collection('BiosecuirityStandStillTime').drop()
}

export { deleteBiosecuirityStandStillTimeData }
