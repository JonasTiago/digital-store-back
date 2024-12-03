import { Router } from "express";
import {
  create,
  findAllSearch,
  findById,
  remove,
  update,
} from "../controllers/ProductController.js";
import { validToken } from "../middlewares/validToken.js";

const productRoutes = new Router();

productRoutes.get("/product/search", findAllSearch);
productRoutes.post("/product", validToken, create);
productRoutes.get("/product/:id", findById);
productRoutes.put("/product/:id", validToken, update);
productRoutes.delete("/product/:id", validToken, remove);

export default productRoutes;
