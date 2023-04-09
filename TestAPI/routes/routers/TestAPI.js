import express from "express";

import { getTestAPI, postTestAPI, putTestAPI } from "../../controllers/TestAPI.js";

const router = express.Router();

router.get("/", getTestAPI);
router.post("/:param", postTestAPI);
router.put("/:param", putTestAPI);

export default router;