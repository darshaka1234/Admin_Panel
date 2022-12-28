import React, { useState } from "react";
import axios from "axios";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCate = () => {
  const navigate = useNavigate();
  const [mainCategory, setMainCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  function handleMainCategoryChange(event) {
    setMainCategory(event.target.value);
  }

  function handleAddSubCategory() {
    setSubCategories([...subCategories, { name: "" }]);
  }

  function handleSubCategoryChange(event, index) {
    const newSubCategories = [...subCategories];
    newSubCategories[index].name = event.target.value;
    setSubCategories(newSubCategories);
  }
  const handleSubmit = async () => {
    const response = await axios
      .post("http://localhost:3001/categories", {
        mainCategory,
        subCategories,
      })
      .then(() => navigate("/table"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">
        ADD CATEGORY
      </Typography>
      <Grid
        sm={8}
        xs={12}
        lg={6}
        container
        spacing={2}
        sx={{
          justifyContent: "flex-end",
          border: " 1px solid lightgray",
          m: 10,
          p: 3,
          pr: 5,
          pb: 5,
          borderRadius: 2,
        }}
      >
        <Grid item sm={12}>
          <Typography htmlFor="mainCategory">Main Category</Typography>
        </Grid>
        <Grid item sm={12}>
          <TextField
            fullWidth
            type="text"
            label="Main Category"
            id="mainCategory"
            value={mainCategory}
            onChange={handleMainCategoryChange}
          />
        </Grid>

        {subCategories.map((subCategory, index) => (
          <Grid
            item
            sm={12}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Grid item sm={3} sx={{ pr: 3 }}>
              <Typography htmlFor={`subCategory-${index}`}>
                Sub Category {index + 1}
              </Typography>
            </Grid>
            <Grid item sm={9}>
              <TextField
                fullWidth
                type="text"
                id={`subCategory-${index}`}
                value={subCategory.name}
                onChange={(event) => handleSubCategoryChange(event, index)}
              />
            </Grid>
          </Grid>
        ))}
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="secondary"
          type="button"
          onClick={handleAddSubCategory}
        >
          Add Sub Category
        </Button>
        <Grid item sm={12}>
          <Button variant="contained" fullWidth color="error" type="reset">
            reset
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" fullWidth type="submit">
            Create Category
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddCate;
