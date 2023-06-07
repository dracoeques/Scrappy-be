import { Router } from "express";

const router = Router();

router.use("/", async (req, res, next) => {
  console.log("curr res: " + currRes);
  res.status(200).json({ status: "test success", currRes });
});

export default router;
