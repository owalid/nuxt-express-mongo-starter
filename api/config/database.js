import mongoose from 'mongoose'

require('dotenv').config()
export const connectDb = async () => {
  try {
    console.log('Starting server')
    mongoose.set('useFindAndModify', false)
    await mongoose.connect(
      `mongodb://public:\
      ${process.env.NUXT_DB_PASSWD}\
      @${process.env.NUXT_DB_HOST}\
      /${process.env.NUXT_DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log('Connect to db')
  } catch (err) {
    console.error(`Failed to connect to MongoDB server: \n${err}`)
  }
}
