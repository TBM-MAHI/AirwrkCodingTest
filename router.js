const express = require("express");
const router = express.Router();

router.post("/analyze", handleAnalyze);
router.post("/similarity", handleSimilarity);

