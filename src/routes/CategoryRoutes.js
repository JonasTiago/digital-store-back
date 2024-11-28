import { Router } from "express";
import {
  create,
  findAllSearch,
  findById,
  remove,
  update,
} from "../controllers/CategoryController.js";

const categoryRouter = new Router();

categoryRouter.get("/category/search", findAllSearch);
categoryRouter.post("/category", create);
categoryRouter.get("/category/:id", findById);
categoryRouter.put("/category/:id", update);
categoryRouter.delete("/category/:id", remove);

export default categoryRouter;
