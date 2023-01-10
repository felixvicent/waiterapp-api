import { Request, Response } from "express";

import { Ingredient } from "../../models/Ingredient";

export async function createIngredients(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const ingredient = await Ingredient.create({ icon, name });

    return res.status(201).json(ingredient);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
