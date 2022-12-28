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

const CategoryTable = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    axios.get("http://localhost:3001/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleAddCategory = () => {
    navigate("/add-category");
  };

  const handleSort = () => {
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const handleEdit = (categoryId) => {
    navigate(`/edit-category/${categoryId}`);
  };

  const handleDelete = async (categoryId) => {
    await axios
      .delete(`http://localhost:3001/categories/${categoryId}`)
      .then(() => {
        navigate("/table");
      });
  };

  return (
    <div className="outer">
      <Button
        sx={{ mt: 2, ml: 5 }}
        variant="contained"
        color="secondary"
        type="button"
        onClick={handleAddCategory}
      >
        ADD NEW CATEGORY
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={handleSort}>Category Name</TableCell>
            <TableCell>Subcategories</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories
            .sort((a, b) =>
              sort === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
            )
            .map((category) => (
              <TableRow key={category._id} sx={{ alignItems: "flex-start" }}>
                <TableCell>
                  <Typography sx={{}}>{category.name}</Typography>
                </TableCell>
                <TableCell>
                  {category.subCategories?.map((cate) => (
                    <Typography varient="subtitle" key={cate.name}>
                      {cate.name}
                    </Typography>
                  ))}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(category._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ ml: 5 }}
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(category._id)}
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

export default CategoryTable;
