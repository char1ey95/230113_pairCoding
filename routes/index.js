const express = require('express')
const router = express.Router()
const board = require('./board.router')

router.use('/board', board)

module.exports = router