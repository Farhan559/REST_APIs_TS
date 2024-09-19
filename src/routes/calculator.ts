import { timeStamp } from "console";
import { Router, Request } from "express";
import { calculatorRequestBody } from "../types";
import { validateCalculatorRequest } from "../middleware";

export const router = Router();

router.get("/", (req: Request, res) => {
  res.send({
    message: "Get all calculations",
    timestamp: req.timestamp,
    data: [
      { id: 1, result: 1 },
      { id: 2, result: 2 },
    ],
  });
});

router.get("/:id", (req: Request, res) => {
  res.send({
    message: "Get calculation by id",
    timestamp: req.timestamp,
    id: req.params.id,
    result: 1,
  });
});

router.post(
  "/",
  validateCalculatorRequest,
  (req: Request<{}, any, calculatorRequestBody>, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result: string | number;
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
  },
);
