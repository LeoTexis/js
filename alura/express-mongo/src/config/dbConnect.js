import mongoose from "mongoose"

async function conectaDatabase() {
  mongoose.connect(process.env.DB_COONECTION_STRING)

  return mongoose.connection
}

export default conectaDatabase

