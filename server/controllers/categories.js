import Category from "../models/Category.js";

export const allSender = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const singleSender = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const receiver = async (req, res) => {
  const name = req.body.mainCategory;
  const subCategories = req.body.subCategories;
  const category = new Category({ name, subCategories });
  try {
    const newCategory = await category.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editor = async (req, res) => {
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
};

export const deleter = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send();
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};
