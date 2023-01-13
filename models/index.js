const config = require("../config")["db"];
const { Sequelize, DataTypes, Model } = require("sequelize");
// console.log(config);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

require("./User.model")({ sequelize, DataTypes, Model });
require("./Board.model")({ sequelize, DataTypes, Model });

const { User, Board } = sequelize.models;
// User.associate(Board);
// Board.associate(User);

(async () => {
    await sequelize.sync({ force: true });
})();

module.exports = {
    sequelize,
    DataTypes,
    Model,
};

