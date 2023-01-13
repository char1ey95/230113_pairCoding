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

const { User, Board, Reply, Like, HashTag, HashTable } = sequelize.models;
User.associate(Board);
Board.associate(User);
Board.associatehasmany(Reply);
Reply.associate(User);
Reply.associateboard(Board);
Like.associate(User);
Like.associateboard(Board);
HashTag.associate(HashTable);
HashTable.associateHash(HashTag);
HashTable.associateboard(Board);

(async () => {
    await sequelize.sync({ force: true });
    await User.create({ userid: "web7722", userpw: "1234", username: "test1" });
    await User.create({ userid: "admin", userpw: "1234", username: "admin" });
})();

module.exports = {
    sequelize,
    DataTypes,
    Model,
};

