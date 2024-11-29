import { Model, DataTypes } from "sequelize";
import connection from "../config/db.js";
class ProductOptionModel extends Model {}

ProductOptionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Incremento automático
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Obrigatório
    },
    shape: {
      type: DataTypes.ENUM("square", "circle"),
      allowNull: true,
      defaultValue: "square",
    },
    radius: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM("text", "color"),
      allowNull: true,
      defaultValue: "text",
    },
    values: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "ProductOption",
    tableName: "product_options",
    timestamps: true,
  }
);

export default ProductOptionModel;
