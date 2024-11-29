import { Router } from "express";
import {
  create,
  findAllSearch,
  findById,
  remove,
  update,
} from "../controllers/ProductController.js";

const productRoutes = new Router();

productRoutes.get("/product/search", findAllSearch);
productRoutes.post("/product", create);
productRoutes.get("/product/:id", findById);
productRoutes.put("/product/:id", update);
productRoutes.delete("/product/:id", remove);

export default productRoutes;
