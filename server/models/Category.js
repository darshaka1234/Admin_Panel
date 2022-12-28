import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  subCategories: {
    type: Array,
    default: [],
  },
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
