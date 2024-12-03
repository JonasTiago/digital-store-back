import { Router } from "express";
import {
  findAll,
  findOne,
  create,
  update,
  remove,
  authUser,
} from "../controllers/UserController.js";
import { validToken } from "../middlewares/validToken.js";

const userRoutes = new Router();

userRoutes.get("/user", findAll);
userRoutes.get("/user/:id", findOne);
userRoutes.post("/user", create);
userRoutes.patch("/user/:id", validToken, update);
userRoutes.delete("/user/:id", validToken, remove);
userRoutes.post("/user/token", authUser);

export default userRoutes;
