import express from "express";
const router = express.Router();
import Product from "../models/Product.js";
import fs from "fs";

router.post("/", async (req, res) => {
  try {
    const { name, price, categories } = req.body;
    if (!req.body.name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const image = {
      data: fs.readFileSync(
        path.join(__dirname + "public/assets" + req.file.filename)
      ),
      contentType: "image/png",
    };
    const product = new Product({ name, price, image, categories });
    const newProduct = await product.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, price, image, categories } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, image, categories },
      { new: true }
    );
    if (!product) {
      return res.status(404).json("Not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json("Not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
