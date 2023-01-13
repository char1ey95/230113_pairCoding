module.exports = ({ sequelize, DataTypes, Model }) => {
    class User extends Model {
        static initial() {
            return this.init(
                {
                    userid: {
                        type: DataTypes.STRING(30),
                        primaryKey: true,
                    },
                    userpw: {
                        type: DataTypes.STRING(64),
                        allowNull: false,
                    },
                    username: {
                        type: DataTypes.STRING(10),
                        allowNull: false,
                    },
                },
                {
                    sequelize,
                }
            );
        }

        static associate(Board) {
            this.hasMany(Board, {
                foreignKey: "userid",
                allowNull: false,
                constraints: true,
                onDelete: "cascade",
            });
        }
    }
    User.initial();
    return User;
};

