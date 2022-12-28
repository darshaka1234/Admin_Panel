import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mainCategory, setMainCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/categories/${params.id}`
        );

        const data = response.data;
        setMainCategory(data.name);
        setSubCategories(data.subCategories);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!mainCategory) {
    return <p>No data</p>;
  }

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
  const handleEdit = async () => {
    const editResponse = await axios
      .put(`http://localhost:3001/categories/${params.id}`, {
        mainCategory,
        subCategories,
      })
      .then(() => navigate("/table", { replace: "true" }));
  };

  return (
    <form onSubmit={handleEdit}>
      <Typography variant="h5" align="center">
        Edit CATEGORY
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
            Edit Category
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditCategory;
