import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function archiveOrders(req: Request, res: Response) {
  try {
    await Order.updateMany({}, { $set: { archive: true } });

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
