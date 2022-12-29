import Product from "./../models/Product.js";
import { dirname } from "../index.js";
import fs from "fs";
import path from "path";

export const allSender = async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const singleSender = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const receiver = async (req, res) => {
  const { name, price, categories } = req.body;

  const __dirname = dirname();
  const image = {
    data: fs.readFileSync(
      path.join(__dirname + "/public/assets/" + req.file.filename)
    ),
    contentType: "image/png",
  };
  const product = new Product({ name, price, image, categories });
  try {
    const newProduct = await product.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editor = async (req, res) => {
  try {
    const { name, price, categories } = req.body;
    const image = {
      data: fs.readFileSync(
        path.join(dirname() + "/public/assets/" + req.file.filename)
      ),
      contentType: "image/png",
    };

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
};

export const deleter = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json("Not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
