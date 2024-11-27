import { Model, DataTypes } from "sequelize";
import connection from "../config/db.js"; // Importa a conexão do Sequelize

// Definindo o modelo User
class ProductModel extends Model {}

ProductModel.init(
  {
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
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
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price_with_discount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize: connection, // Passa a instância de conexão
    modelName: "Product", // Nome do modelo
    tableName: "products", // Nome da tabela no banco de dados
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

export default ProductModel;
