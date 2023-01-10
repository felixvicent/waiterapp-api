import { Router } from "express";
import multer from "multer";
import path from "node:path";

import { createProducts } from "../app/useCases/products/createProduct";
import { updateProduct } from "../app/useCases/products/updateProduct";
import { listProducts } from "../app/useCases/products/listProducts";
import { deleteProduct } from "../app/useCases/products/deleteProduct";

export const productsRoutes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

productsRoutes.get("/", listProducts);
productsRoutes.post("/", upload.single("image"), createProducts);
productsRoutes.put("/:id", upload.single("image"), updateProduct);
productsRoutes.delete("/:id", deleteProduct);
