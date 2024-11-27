import { Router } from "express";
import { findAll, findOne } from "../controllers/UserController.js";

const userRoutes = new Router();

userRoutes.get("/users", findAll);
userRoutes.get("/users/:id", findOne);

export default userRoutes;
