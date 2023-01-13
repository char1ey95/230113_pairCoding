const config = require("../config/config")["db"]["test"];
const { Sequelize, DataTypes, Model } = require("sequelize");
// console.log(config);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

require("./user.model")({ sequelize, DataTypes, Model });
require("./board.model")({ sequelize, DataTypes, Model });
require("./reply.model")({ sequelize, DataTypes, Model });
require("./like.model")({ sequelize, DataTypes, Model });
require("./hashTag.model")({ sequelize, DataTypes, Model });
require("./hashTable.model")({ sequelize, DataTypes, Model });

const { User, Board, Reply, Likes, HashTag, HashTable } = sequelize.models;
User.associate(sequelize.models);
Board.associate(sequelize.models);
Board.associatehasmany(sequelize.models);
Reply.associate(sequelize.models);
Likes.associate(sequelize.models);
HashTag.associate(sequelize.models);
HashTable.associate(sequelize.models);

// (async () => {
//     await sequelize.sync({ force: true });
//     await User.create({ userid: "web7722", userpw: "1234", username: "test1" });
//     await User.create({ userid: "admin", userpw: "1234", username: "admin" });
//     await Board.create({ subject: "asdff", content: "asdf", userid: "web7722" });
//     await Reply.create({ content: "asdff", board_idx: "1", userid: "admin" });
//     await Reply.create({ content: "asdfqwrf", board_idx: "1", userid: "admin" });
//     await Reply.create({ content: "asdwqrqff", board_idx: "1", userid: "admin" });
// })();

module.exports = {
    sequelize,
    DataTypes,
    Model,
};

