import { Router } from "express";
import {
  create,
  findAllSearch,
  findById,
  remove,
  update,
} from "../controllers/CategoryController.js";
import { validToken } from "../middlewares/validToken.js";

const categoryRouter = new Router();

categoryRouter.get("/category/search", findAllSearch);
categoryRouter.post("/category", validToken, create);
categoryRouter.get("/category/:id", findById);
categoryRouter.put("/category/:id", validToken, update);
categoryRouter.delete("/category/:id", validToken, remove);

export default categoryRouter;
