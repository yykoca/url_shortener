import express from 'express';
import linksController from  '../controllers/links.js';
// import autheticatelink from '../middleware/autheticatelink.js';

const router = express.Router();

router.get("/", linksController.readAll);
router.get("/:id", linksController.readOne);
router.post("/", linksController.create);
router.put("/", linksController.updateOne);
router.delete("/:id", linksController.deleteOne);

export default router;