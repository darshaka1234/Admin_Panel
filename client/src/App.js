import { Route, Routes } from "react-router-dom";
import AddCate from "./screens/AddCate";
import ProductTable from "./components/ProductTable";
import CategoryTable from "./components/Categories";
import EditCategory from "./screens/EditCategory";
import AddProduct from "./screens/AddProduct";
import EditProduct from "./screens/EditProduct";
import Home from "./screens/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-table" element={<CategoryTable />} />
        <Route path="/add-category" element={<AddCate />} />
        <Route path="/edit-category/:id" element={<EditCategory />} />
        <Route path="/product-table" element={<ProductTable />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
