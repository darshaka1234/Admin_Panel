import { Select } from "@mui/material";
import React from "react";

const Dropdown = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const handleChange = (event) => {
    const { options } = event.target;
    console.log(options);
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelectedCategories(value);
  };

  return (
    <Select
      multiple
      native
      onChange={handleChange}
      value={categories}
      fullWidth
      sx={{ ml: 2 }}
    >
      {categories.map((category) => (
        <optgroup key={category.name} label={category.name}>
          {category.subCategories.map((subCategory) => (
            <option
              key={subCategory.name}
              value={subCategory.name}
              onClick={(e) => !e.target.selected}
            >
              {subCategory.name}
            </option>
          ))}
        </optgroup>
      ))}
    </Select>
  );
};

export default Dropdown;
