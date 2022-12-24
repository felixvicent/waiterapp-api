import { Router } from "express";
import { ensureAuthenticated } from "../app/middlewares/ensureAuthenticated";

import { registerUser } from "../app/useCases/users/registerUser";

export const userRoutes = Router();

userRoutes.post("/register", ensureAuthenticated, registerUser);
