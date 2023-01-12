import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function updateCategory(req: Request, res: Response) {
  const { id } = req.params;
  const { icon, name } = req.body;

  try {
    await Category.findByIdAndUpdate(id, { icon, name });

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
