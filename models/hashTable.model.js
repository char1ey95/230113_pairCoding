module.exports = ({ sequelize, DataTypes, Model }) => {
    class HashTable extends Model {
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
                    sequelize: sequelize,
                    createdAt: false,
                    updatedAt: false,
                }
            );
        }
        static associate(models) {
            this.belongsTo(models.HashTag, {
                foreignKey: "hash_idx",
            });
            this.belongsTo(models.Board, {
                foreignKey: "board_idx",
            });
        }
    }
    HashTable.initial();
    return HashTable;
};

