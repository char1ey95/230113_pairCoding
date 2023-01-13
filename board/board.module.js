const { sequelize: { models } } = require('../models/index')
// console.log(models)

const BoardRepository = require('./board.repository')
const BoardService = require('./board.service')
const BoardController =require('./board.controller')

const respository = new BoardRepository(models.Board)
// respository.getRepositoryAll().then((data) => console.log(data))

const service = new BoardService( respository )
// service.getServiceAll().then((data) => console.log(data))

const controller = new BoardController(service)
// controller.getAll().then((data) => console.log(data))

module.exports = {
    respository,
    service,
    controller,
}