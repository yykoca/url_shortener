import express from 'express';
import usersController from  '../controllers/users.js';

const router = express.Router({ mergeParams: true });

router.get("/", usersController.readAll);
router.get("/:id", usersController.readOne);
router.post("/", usersController.create);
router.post("/login", usersController.login);
router.put("/", usersController.updateOne);
router.delete("/:id", usersController.deleteOne);

export default router;