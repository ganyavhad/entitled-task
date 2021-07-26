const express = require('express');
const router = express.Router();

const LeadCollectionController = require("./LeadCollectionController")

router.use("/lead-collection", LeadCollectionController)

module.exports = router