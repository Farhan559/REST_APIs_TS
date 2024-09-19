import express from "express";
import { healthRouter, calculatorRouter } from "./routes";
import { logger } from "./middleware/log";
import { addTimestamp, errorHandler } from "./middleware";

const app = express();
const port = 3000;
app.use(addTimestamp);
app.use(logger);

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
