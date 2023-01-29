import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Dropdown from "./../components/Dropdown";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [checkCategories, setCheckCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/categories", {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        setCheckCategories(response.data);
        console.log();
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const mycategories = [{ name: "Jeans" }, { name: "Tshirts" }];
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("categories", mycategories);

    axios.post("http://localhost:3001/products", formData).then((response) => {
      console.log(response.data);
    });
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">
        ADD PRODUCT
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
          <Typography>Product Name</Typography>
        </Grid>
        <Grid item sm={12}>
          <TextField
            type="text"
            fullWidth
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>Product Price</Typography>
        </Grid>
        <Grid item sm={12}>
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>Product Image</Typography>
        </Grid>
        <Grid item sm={12}></Grid>
        <Grid item sm={12}>
          <input
            name="image"
            id="contained-button-file"
            type="file"
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>Product Categories</Typography>
        </Grid>
        <Dropdown categories={checkCategories} />
        <Grid item sm={12}>
          <Button variant="contained" fullWidth color="error" type="reset">
            reset
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Product
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
