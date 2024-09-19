import { Router, Request } from "express";

export const router = Router();


router.get("", (req: Request, res) => {
  throw new Error('Application error');
  res.send({ message: "OK", timestamp: req.timestamp });
  res.send({ message: "OK", timestamp: req.timestamp });
});
