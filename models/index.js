const config = require("../config/config")["db"]["test"];
const { Sequelize, DataTypes, Model } = require("sequelize");
// console.log(config);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

require("./user.model")({ sequelize, DataTypes, Model });
require("./board.model")({ sequelize, DataTypes, Model });

const { User, Board } = sequelize.models;
User.associate(Board);
Board.associate(User);

(async () => {
    await sequelize.sync({ force: true });
})();

module.exports = {
    sequelize,
    DataTypes,
    Model,
};

