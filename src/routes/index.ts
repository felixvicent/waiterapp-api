import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { orderRoutes } from "./orders.routes";
import { productsRoutes } from "./products.routes";

export const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/products", productsRoutes);
router.use("/orders", orderRoutes);
