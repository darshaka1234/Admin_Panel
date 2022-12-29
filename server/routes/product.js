import express from "express";
const router = express.Router();
import {
  allSender,
  singleSender,
  receiver,
  editor,
  deleter,
} from "./../controllers/products.js";

router.get("/", allSender);
router.get("/:id", singleSender);
router.post("/", receiver);
router.put("/:id", editor);
router.delete("/:id", deleter);

export default router;
