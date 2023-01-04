import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  const query = req.query;

  let archiveStatus = false;

  if (query.archived) {
    archiveStatus = true;
  }

  try {
    const orders = await Order.find({ archive: archiveStatus })
      .sort({ createdAt: 1 })
      .populate("products.product");

    return res.json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
