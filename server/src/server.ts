import express, { type Request, type Response } from "express";
import env from "dotenv";

const app = express();
const PORT = process.env.PORT || 3000;

env.config();

app.use(express.json());

//user routes

// app.use("/api/v1/user");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

const start = async () => {
  app.listen(4000, () => console.log("Server running"));
};

start();
