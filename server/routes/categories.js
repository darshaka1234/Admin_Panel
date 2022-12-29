import { Router } from "express";
const router = Router();
import {
  allSender,
  singleSender,
  receiver,
  editor,
  deleter,
} from "./../controllers/categories.js";

router.get("/", allSender);
router.get("/:id", singleSender);
router.post("/", receiver);
router.put("/:id", editor);
router.delete("/:id", deleter);

export default router;
