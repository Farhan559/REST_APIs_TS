"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
function logger(req, res, next) {
  console.log(`${req.timestamp} ${req.ip} ${req.originalUrl}`);
  next();
}
