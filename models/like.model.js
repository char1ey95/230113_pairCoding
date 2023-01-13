module.exports = ({ sequelize, DataTypes, Model }) => {
    class Likes extends Model {
        static initial() {
            return this.init(
                {
                    idx: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                },
                {
                    sequelize,
                    createdAt: false,
                    updatedAt: false,
                }
            );
        }
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: "userid",
            });
            this.belongsTo(models.Board, {
                foreignKey: "board_idx",
            });
        }
    }
    Likes.initial();
    return Likes;
};

