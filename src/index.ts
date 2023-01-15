import dotenv from "dotenv";

import path from "node:path";
import http from "node:http";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";

import { router } from "./routes";

dotenv.config();

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect(process.env.MONGO_DB_URI ?? "")
  .then(() => {
    const port = process.env.APP_PORT ?? 3333;

    app.use(cors());
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("Error at connect"));
