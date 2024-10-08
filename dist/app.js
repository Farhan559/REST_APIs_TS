"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const log_1 = require("./middleware/log");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(middleware_1.addTimestamp);
app.use(express_1.default.json());
app.use(log_1.logger);
app.use("/health", routes_1.healthRouter);
app.use("/calculator", routes_1.calculatorRouter);
app.use(middleware_1.errorHandler);
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
