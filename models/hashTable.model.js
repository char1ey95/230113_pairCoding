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
        static associateHash(models) {
            this.belongsTo(models, {
                foreignKey: "hash_idx",
            });
        }

        static associateboard(models) {
            this.belongsTo(models, {
                foreignKey: "board_idx",
            });
        }
    }
    HashTable.initial();
    return HashTable;
};

