import { Router } from "express";
import {
  findAll,
  findOne,
  create,
  update,
  remove,
} from "../controllers/UserController.js";

const userRoutes = new Router();

userRoutes.get("/users", findAll);
userRoutes.get("/users/:id", findOne);
userRoutes.post("/users", create);
userRoutes.patch("/users/:id", update);
userRoutes.delete("/users/:id", remove);

export default userRoutes;
