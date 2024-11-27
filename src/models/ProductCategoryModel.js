import { Model, DataTypes } from "sequelize";
import connection from "../config/db.js"; // Conexão com o banco de dados
import Product from "./ProductModel.js"; // Importando o modelo de Produto
import Category from "./CategoryModel.js"; // Importando o modelo de Categoria

class ProductCategory extends Model {}

ProductCategory.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    modelName: "ProductCategory",
    tableName: "product_categories", // Nome da tabela de junção
    timestamps: false,
  }
);

// Definindo o relacionamento muitos-para-muitos
Product.belongsToMany(Category, {
  through: ProductCategory,
  foreignKey: "product_id",
  otherKey: "category_id",
  as: "categories",
});

Category.belongsToMany(Product, {
  through: ProductCategory,
  foreignKey: "category_id",
  otherKey: "product_id",
  as: "products", // Alias para o relacionamento
});

export default ProductCategory;
