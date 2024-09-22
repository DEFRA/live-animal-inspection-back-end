import { ObjectId } from 'mongodb'

async function updateShedOpeningTiming(db, id, from, to) {
  const result = await db.collection('ShedOpeningTimings').updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        From: from,
        To: to
      }
    }
  )

  return result
}

export { updateShedOpeningTiming }
