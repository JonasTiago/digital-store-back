import connection from "../config/db.js";

import "../models/ProductOptionModel.js";
import "../models/ProductCategoryModel.js";
import "../models/ProductModel.js";
import "../models/CategoryModel.js";
import "../models/ImageProductModel.js";
import "../models/UserModel.js";
import ProductModel from "../models/ProductModel.js";
import ImageProductModel from "../models/ImageProductModel.js";

ProductModel.hasMany(ImageProductModel, {
  foreignKey: "product_id",
  as: "images", // Nome da associação
});

ImageProductModel.belongsTo(ProductModel, {
  foreignKey: "product_id",
});

connection.sync({ alter: true });
console.log("Tabelas sincronizadas com o banco de dados!");
