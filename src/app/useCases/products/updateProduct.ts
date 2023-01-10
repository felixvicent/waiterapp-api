import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function updateProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { id } = req.params;
    const { name, description, price, category, ingredients } = req.body;

    await Product.findByIdAndUpdate(id, {
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath,
    });

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
