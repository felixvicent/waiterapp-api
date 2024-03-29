import { Router } from "express";
import { ensureAuthenticated } from "../app/middlewares/ensureAuthenticated";

import { registerUser } from "../app/useCases/users/registerUser";
import { listUsers } from "../app/useCases/users/listUsers";
import { updateUser } from "../app/useCases/users/updateUser";
import { deleteUser } from "../app/useCases/users/deleteUser";

export const userRoutes = Router();

userRoutes.get("/", ensureAuthenticated, listUsers);
userRoutes.put("/:id", ensureAuthenticated, updateUser);
userRoutes.delete("/:id", ensureAuthenticated, deleteUser);
userRoutes.post("/register", ensureAuthenticated, registerUser);
