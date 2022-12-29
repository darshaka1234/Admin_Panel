import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import productRoutes from "./routes/product.js";
import categoryRoutes from "./routes/categories.js";
import userRoutes from "./routes/users.js";
import { fileURLToPath } from "url";
import path from "path";

export const dirname = () => path.dirname(fileURLToPath(import.meta.url));

dotenv.config();
const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use("/users", userRoutes);
app.use("/products", upload.single("image"), productRoutes);
app.use("/categories", upload.any(), categoryRoutes);

const port = process.env.PORT || 5000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`sucsessfully started on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
