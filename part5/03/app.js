const express = require('express')
const morgan = require('morgan')

const cors = require('cors')

const router = require('./router')
require('./model')
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/api', router)
const PORT = process.env.PORT || 3010
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})

