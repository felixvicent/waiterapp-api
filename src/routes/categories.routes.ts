import { Router } from "express";

import { createCategory } from "../app/useCases/categories/createCategory";
import { listCategories } from "../app/useCases/categories/listCategories";

import { listProductsByCategory } from "../app/useCases/categories/listProductsByCategory";

export const categoriesRoutes = Router();

categoriesRoutes.get("/", listCategories);
categoriesRoutes.post("/", createCategory);
categoriesRoutes.get("/:categoryId/products", listProductsByCategory);
