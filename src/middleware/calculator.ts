import { Request, Response, NextFunction } from "express";
import { calculatorRequestBody } from "../types";

export function validateCalculatorRequest(
  req: Request<{}, any, calculatorRequestBody>,
  res: Response,
  next: NextFunction,
) {
  const { operator, operand1, operand2 } = req.body;
  if (typeof operand1 !== "number" || typeof operand2 !== "number") {
    return res.status(400).send("Operand must be a numbers");
  }
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/"
  ) {
    return res.status(400).send("Operator must be +,-,/,*");
  }
  next();
}
