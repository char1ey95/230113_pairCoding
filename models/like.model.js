module.exports = ({ sequelize, DataTypes, Model }) => {
    class Like extends Model {
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
            this.belongsTo(models, {
                foreignKey: "userid",
            });
        }

        static associateboard(models) {
            this.belongsTo(models, {
                foreignKey: "board_idx",
            });
        }
    }
    Like.initial();
    return Like;
};

