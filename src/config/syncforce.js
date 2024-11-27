import connection from "../config/db.js";

import "../models/CategoryModel.js";
import "../models/ImageProductModel.js";
import "../models/ProductModel.js";
import "../models/UserModel.js";
import "../models/ProductOptionModel.js";
import "../models/ProductCategoryModel.js";

connection.sync({ alter: true });
console.log("Tabelas sincronizadas com o banco de dados!");
