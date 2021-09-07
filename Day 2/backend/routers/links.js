const express = require('express');
const linksController = require('../controllers/links.js');
const autheticatelink = require('../middleware/autheticatelink.js');

const router = express.Router();


router.get("/", linksController.readAll);
router.get("/:id", linksController.readOne);
router.post("/", linksController.create);
router.put("/", linksController.updateOne);
router.delete("/:id", linksController.deleteOne);




module.exports = router;