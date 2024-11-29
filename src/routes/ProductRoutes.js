import { Router } from "express";
import {
  create,
  findAllSearch,
  findById,
} from "../controllers/ProductController.js";

const productRoutes = new Router();

productRoutes.get("/product/search", findAllSearch);
productRoutes.post("/product", create);
productRoutes.get("/product/:id", findById);

export default productRoutes;
