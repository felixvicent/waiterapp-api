import { Router } from "express";

import { createCategory } from "../app/useCases/categories/createCategory";
import { listCategories } from "../app/useCases/categories/listCategories";
import { deleteCategory } from "../app/useCases/categories/deleteCategory";
import { updateCategory } from "../app/useCases/categories/updateCategory";

import { listProductsByCategory } from "../app/useCases/categories/listProductsByCategory";

export const categoriesRoutes = Router();

categoriesRoutes.get("/", listCategories);
categoriesRoutes.post("/", createCategory);
categoriesRoutes.get("/:categoryId/products", listProductsByCategory);
categoriesRoutes.put("/:id", updateCategory);
categoriesRoutes.delete("/:id", deleteCategory);
