import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { router } from "./routes";

const app = express();

if(process.env.MONGODB_CONNECTION_URL) {
  mongoose.connect(process.env.MONGODB_CONNECTION_URL);
}

app.use(cors());
app.use(express.json());
app.use(router);

export { app };