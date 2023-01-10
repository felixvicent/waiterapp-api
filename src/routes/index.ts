import { Router } from "express";
import { ensureAuthenticated } from "../app/middlewares/ensureAuthenticated";
import { authRoutes } from "./auth.routes";

import { categoriesRoutes } from "./categories.routes";
import { ingredientsRoutes } from "./ingredients.routes";
import { orderRoutes } from "./orders.routes";
import { productsRoutes } from "./products.routes";
import { userRoutes } from "./users.routes";

export const router = Router();

router.use("/categories", ensureAuthenticated, categoriesRoutes);
router.use("/products", ensureAuthenticated, productsRoutes);
router.use("/ingredients", ensureAuthenticated, ingredientsRoutes);
router.use("/orders", ensureAuthenticated, orderRoutes);
router.use("/users", ensureAuthenticated, userRoutes);
router.use("/auth", authRoutes);
