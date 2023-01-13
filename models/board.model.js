module.exports = ({ sequelize, DataTypes, Model }) => {
    class Board extends Model {
        static boardinit() {
            return this.init(
                {
                    userid: {
                        type: DataTypes.STRING(30),
                        allowNull: false,
                    },
                    subject: {
                        type: DataTypes.STRING(100),
                        allowNull: false,
                    },
                    content: {
                        type: DataTypes.TEXT,
                        allowNull: true,
                    },
                    register: {
                        type: DataTypes.DATE,
                        defaultValue: sequelize.fn("now"),
                    },
                },
                {
                    sequelize,
                }
            );
        }
        static associate(User) {
            this.belongsTo(User, {
                foreignKey: "userid",
            });
        }
    }
    Board.boardinit();
    return Board;
};

