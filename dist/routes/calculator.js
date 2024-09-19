"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res) => {
    res.send({
        message: "Get all calculations",
        timestamp: req.timestamp,
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 },
        ],
    });
});
exports.router.get("/:id", (req, res) => {
    res.send({
        message: "Get calculation by id",
        timestamp: req.timestamp,
        id: req.params.id,
        result: 1,
    });
});
exports.router.post("/", middleware_1.validateCalculatorRequest, (req, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        default:
            result = "Invalid operator";
            break;
    }
    res.send({
        message: "Get calculation by ID",
        timeStamp: req.timestamp,
        result,
    });
});
