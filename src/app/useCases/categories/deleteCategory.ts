import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function deleteCategory(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await Category.findByIdAndDelete(id);

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
