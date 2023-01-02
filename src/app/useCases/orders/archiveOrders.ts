import { Request, Response } from "express";
import { io } from "../../..";

import { Order } from "../../models/Order";

export async function archiveOrders(req: Request, res: Response) {
  try {
    await Order.updateMany({}, { $set: { archive: true } });

    io.emit("orders@archive", true);

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
