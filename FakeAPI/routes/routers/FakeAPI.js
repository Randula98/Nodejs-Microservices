import express from "express";

import { getFakeAPI, postFakeAPI, putFakeAPI } from "../../controllers/FakeAPI.js";

const router = express.Router();

router.get("/", getFakeAPI);
router.post("/:param", postFakeAPI);
router.put("/:param", putFakeAPI);

export default router;