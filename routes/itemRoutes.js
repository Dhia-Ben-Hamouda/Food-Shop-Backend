import express from "express";
import { getAllItems , insertItem } from "../controllers/itemController.js";

const router = express.Router();
router.use(express.json());

router.get("/getAllItems" , getAllItems);
router.post("/insertItem" , insertItem);

export default router;