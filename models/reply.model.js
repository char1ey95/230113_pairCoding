module.exports = ({ sequelize, DataTypes, Model }) => {
    class Reply extends Model {
        static initial() {
            return this.init(
                {
                    content: {
                        type: DataTypes.STRING(100),
                        allowNull: false,
                    },
                },
                {
                    sequelize,
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
    Reply.initial();
    return Reply;
};

