import { Router } from "express";

import { listOrders } from "../app/useCases/orders/listOrders";
import { createOrder } from "../app/useCases/orders/createOrders";
import { changeOrderStatus } from "../app/useCases/orders/changeOrderStatus";
import { cancelOrder } from "../app/useCases/orders/cancelOrder";

export const orderRoutes = Router();

orderRoutes.get("/", listOrders);
orderRoutes.post("/", createOrder);
orderRoutes.patch("/:orderId", changeOrderStatus);
orderRoutes.delete("/:orderId", cancelOrder);
