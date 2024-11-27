import { Model, DataTypes } from "sequelize";
import connection from "../config/db.js"; // Importa a conexão do Sequelize

// Definindo o modelo User
class CategoryModel extends Model {}

CategoryModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: connection, // Passa a instância de conexão
    modelName: "Category", // Nome do modelo
    tableName: "categories", // Nome da tabela no banco de dados
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

export default CategoryModel;
