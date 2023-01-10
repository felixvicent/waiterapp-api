import { Router } from "express";

import { createIngredients } from "../app/useCases/ingredients/createIngredients";
import { listIngredients } from "../app/useCases/ingredients/listIngredients";

export const ingredientsRoutes = Router();

ingredientsRoutes.get("/", listIngredients);
ingredientsRoutes.post("/", createIngredients);
