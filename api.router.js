const express = require("express");
const router = express.Router();
let { handleAnalyze, handleSimilarity } = require('./controller');


router.post("/analyze", handleAnalyze);
router.post("/similarity", handleSimilarity);
router.get('/', (req, res) => res.status(200).json({ msg: "ok" }));

module.exports = router;



