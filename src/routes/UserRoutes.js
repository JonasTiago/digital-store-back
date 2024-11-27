import { Router } from "express";
import { findAll, findOne, create } from "../controllers/UserController.js";

const userRoutes = new Router();

userRoutes.get("/users", findAll);
userRoutes.get("/users/:id", findOne);
userRoutes.post("/users", create);

export default userRoutes;
