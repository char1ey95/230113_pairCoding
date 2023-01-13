const config = require('./config/config')
const express = require('express')
const nunjucks = require('nunjucks')
const cors = require('cors')
const app = express()
const router = require('./routes')

app.use(express.urlencoded({ extended:false }))
app.use(cors({ origin: true, credentials: true }))

app.use(router)

app.listen(config.port, () => {
    console.log('server start')
})