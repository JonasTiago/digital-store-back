import { Router } from "express";
import { create, findAllSearch } from "../controllers/CategoryController.js";

const categoryRouter = new Router();

categoryRouter.get("/category/search", findAllSearch);
categoryRouter.post("/category", create);

export default categoryRouter;
