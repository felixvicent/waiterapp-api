import { Router } from "express";

import { listOrders } from "../app/useCases/orders/listOrders";
import { createOrder } from "../app/useCases/orders/createOrders";
import { changeOrderStatus } from "../app/useCases/orders/changeOrderStatus";
import { archiveOrders } from "../app/useCases/orders/archiveOrders";
import { cancelOrder } from "../app/useCases/orders/cancelOrder";

export const orderRoutes = Router();

orderRoutes.get("/", listOrders);
orderRoutes.post("/", createOrder);
orderRoutes.patch("/archive", archiveOrders);
orderRoutes.patch("/:orderId", changeOrderStatus);
orderRoutes.delete("/:orderId", cancelOrder);
