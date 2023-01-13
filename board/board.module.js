const { sequelize } = require('../models/index')
// console.log(models)

const BoardRepository = require('./board.repository')
const BoardService = require('./board.service')
const BoardController =require('./board.controller')

const repository = new BoardRepository(sequelize.models.Board)
// repository.getRepositoryAll().then((data) => console.log(data))
// repository.postRepositoryOne({ userid:"web7722", content: "test", subject:"test" }).then((data) => console.log(data))
// repository.getRepositoryOne(1).then((data) => console.log(data))
// repository.putRepositoryOne({ id: 1, content: "test3" }).then((data) => console.log(data))
// repository.deleteRepositoryOne(1).then((data) => console.log(data))

const service = new BoardService( repository )
// service.getServiceAll().then((data) => console.log(data))
// service.postServiceOne({ userid:"web7722", content: "test2", subject:"test2" }).then((data) => console.log(data))
// service.getServiceOne(1).then((data) => console.log(data))
// service.putServiceOne({ content: "test2", id: 2 }).then((data) => console.log(data))
// service.deleteServiceOne(2).then((data) => console.log(data))

const controller = new BoardController(service)
// controller.getAll().then((data) => console.log(data))
// controller.postOne({ userid:"web7722", content: "test2", subject:"test2" }).then((data) => console.log(data))
// controller.getOne(1).then((data) => console.log(data))
// controller.putOne({ content: "test2", id: 2 }).then((data) => console.log(data))
// controller.deleteOne(2).then((data) => console.log(data))

module.exports = {
    repository,
    service,
    controller,
}