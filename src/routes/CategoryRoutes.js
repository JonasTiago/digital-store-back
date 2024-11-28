import { Router } from "express";
import { findAllSearch } from "../controllers/CategoryController.js";

const categoryRouter = new Router();

categoryRouter.get("/category/search", findAllSearch);
// categoryRouter.post("/category", findAllSearch);

export default categoryRouter;
