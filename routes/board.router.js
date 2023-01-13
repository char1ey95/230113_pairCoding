const express = require('express')
const router = express.Router()
const { controller } = require('../board/board.module')

router.get('/', (req, res, next) => controller.getAll(req, res, next))

router.post('/', (req, res, next) => controller.postOne(req, res, next))

router.get('/:id', (req, res, next) => controller.getOne(req, res, next))

router.put('/:id', (req, res, next) => controller.putOne(req, res, next))

router.delete('/:id', (req, res, next) => controller.deleteOne(req, res, next))


module.exports = router