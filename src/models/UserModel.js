import { Model, DataTypes } from "sequelize";
import connection from "../config/db.js"; // Importa a conexão do Sequelize

// Definindo o modelo User
class UserModel extends Model {}

UserModel.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection, // Passa a instância de conexão
    modelName: "User", // Nome do modelo
    tableName: "users", // Nome da tabela no banco de dados
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

export default UserModel;
