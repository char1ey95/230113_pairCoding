module.exports = ({ sequelize, DataTypes, Model }) => {
    class Board extends Model {
        static boardinit() {
            return this.init(
                {
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
                    hit: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0,
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

        static associatehasmany(models) {
            this.hasMany(models, {
                foreignKey: "board_idx",
                allowNull: false,
                constraints: true,
                onDelete: "cascade",
            });
        }
    }
    Board.boardinit();
    return Board;
};

