import { Router } from "express";
const router = Router();
import Category from "./../models/Category.js";

router.post("/", async (req, res) => {
  const name = req.body.mainCategory;
  const subCategories = req.body.subCategories;

  console.log(name, subCategories);
  const category = new Category({ name, subCategories });
  try {
    const newCategory = await category.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, subCategories } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, subCategories },
      { new: true }
    );
    if (!category) {
      return res.status(404).json("Not found");
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send();
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
