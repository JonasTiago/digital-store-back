import { Model, DataTypes } from "sequelize";
import connection from "../config/db.js"; // Importa a conexão do Sequelize

// Definindo o modelo User
class ImageProductModel extends Model {}

ImageProductModel.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "products",
        key: "id",
      },
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection, // Passa a instância de conexão
    modelName: "ImageProduct", // Nome do modelo
    tableName: "image_products", // Nome da tabela no banco de dados
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

export default ImageProductModel;
