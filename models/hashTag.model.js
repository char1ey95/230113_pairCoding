module.exports = ({ sequelize, DataTypes, Model }) => {
    class HashTag extends Model {
        static initial() {
            return this.init(
                {
                    content: {
                        type: DataTypes.STRING(20),
                        unique: true,
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
            this.hasMany(models.HashTable, {
                foreignKey: "hash_idx",
                allowNull: false,
                constraints: true,
            });
        }
    }
    HashTag.initial();
    return HashTag;
};

