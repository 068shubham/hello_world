import { Request, Response, Router } from "express";
import userControllers from "./user.controllers";

const userRoutes = Router();

userRoutes.get("/", userControllers.get)
userRoutes.get("/:username", userControllers.get)
userRoutes.post("/", userControllers.add)

export default userRoutes