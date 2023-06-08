import { Router } from "express";
import testRouter from "./test.js";

const router = Router();

router.use("/test", testRouter);
router.use("/scrape-all-sites", testRouter);

export default router;
