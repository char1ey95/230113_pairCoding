const {
    sequelize: { models },
} = require("../models/index");
const ReplyRepository = require("./reply.repository");
const ReplyService = require("./reply.service");
const ReplyController = require("./reply.controller");

const repository = new ReplyRepository(models.Reply);
const service = new ReplyService(repository);
const controller = new ReplyController(service);

module.exports = {
    repository,
    service,
    controller,
};

