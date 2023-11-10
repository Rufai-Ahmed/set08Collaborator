import express, { Application } from "express";

const port: number = 6666;

const app: Application = express();

console.log("Boom");

process.on("uncaughtException", (err) => {
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);
  process.exit(1);
});
