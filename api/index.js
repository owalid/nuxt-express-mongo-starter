import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import { apiRouter } from './routes/index'
import { connectDb } from './config/database';

// Connect with db
connectDb();

// Create express instance
const app = express()

// Require API routes
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(cors())
app.use(helmet())

// Import API Routes
app.use(apiRouter)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  // db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
  // })
}
