import path from "node:path";
import http from "node:http";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";

import { router } from "./routes";

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const port = 3333;

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
