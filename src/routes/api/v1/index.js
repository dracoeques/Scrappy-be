import { Router } from "express";
import testRouter from "./test.js";

const router = Router();

router.use("/test", testRouter);
router.use("/", (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "page not found",
  });
});

export default router;
