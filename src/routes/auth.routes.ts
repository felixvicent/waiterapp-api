import { Router } from "express";

import { authenticateUser } from "../app/useCases/auth/authenticateUser";

export const authRoutes = Router();

authRoutes.post("/login", authenticateUser);
