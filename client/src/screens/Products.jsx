import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  const handleSort = () => {
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const handleEdit = (productId) => {
    navigate(`/edit-product/${productId}`);
  };

  const handleDelete = async (productId) => {
    await axios
      .delete(`http://localhost:3001/categories/${productId}`)
      .then(() => {
        navigate("/product-table");
      });
  };

  return (
    <div className="outer">
      <Button
        sx={{ mt: 2, ml: 5 }}
        variant="contained"
        color="secondary"
        type="button"
        onClick={handleAddProduct}
      >
        ADD NEW PRODUCT
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell onClick={handleSort}>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            .sort((a, b) =>
              sort === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
            )
            .map((product) => (
              <TableRow key={product._id} sx={{ alignItems: "flex-start" }}>
                <TableCell>
                  <img
                    src={`data:${
                      product.image.contentType
                    };base64,${Buffer.from(product.image).toString("base64")}`}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{product.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.price}</Typography>
                </TableCell>
                <TableCell>
                  {product.categories?.map((cate) => (
                    <Typography varient="subtitle" key={cate.name}>
                      {cate.name}
                    </Typography>
                  ))}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ ml: 5 }}
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
