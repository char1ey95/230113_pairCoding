const config = require('./config/config')
const express = require('express')
const nunjucks = require('nunjucks')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended:false }))
app.use(cors({ origin: true, credentials: true }))


app.listen(config.port, () => {
    console.log('server start')
})