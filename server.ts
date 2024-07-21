import { Express, Request, Response } from "express";

const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(process.env.MONGO_SRV);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

const app: Express = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript server!");
});

// Start the server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
