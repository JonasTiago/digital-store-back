import { Router } from "express";
import { create, findAllSearch } from "../controllers/ProductController.js";

const productRoutes = new Router();

productRoutes.get("/product/search", findAllSearch);
productRoutes.post("/product", create);

export default productRoutes;
