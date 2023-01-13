const config = require('./config/config')
const express = require('express')
const nunjucks = require('nunjucks')
const cors = require('cors')
const {sequelize} = require('./models/index')
const app = express()
const router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(cors({ origin: true, credentials: true }))

app.use(router)
app.use((err, req, res, next) => {
    console.log(err)
})

app.listen(config.port, async () => {
    await sequelize.sync({ force: true });
    await sequelize.models.User.create({ userid: "web7722", userpw: "1234", username: "test1" });
    await sequelize.models.User.create({ userid: "admin", userpw: "1234", username: "admin" });
    await sequelize.models.Board.create({ userid: "web7722", subject: "첫번째 게시글", content: "1" })
    await sequelize.models.Board.create({ userid: "web7722", subject: "두번째 게시글", content: "2" })
    await sequelize.models.Board.create({ userid: "web7722", subject: "세번째 게시글", content: "3" })
    await sequelize.models.Board.create({ userid: "web7722", subject: "네번째 게시글", content: "4" })
    await sequelize.models.Board.create({ userid: "web7722", subject: "다섯번째 게시글", content: "5" })
    console.log('server start')
})