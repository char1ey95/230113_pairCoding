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
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: "userid",
            });
        }

        static associatehasmany(models) {
            this.hasMany(models.Reply, {
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

