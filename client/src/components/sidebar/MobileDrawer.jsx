import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, SwipeableDrawer } from "@mui/material";
import Content from "./Content";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobiledrawer">
      <IconButton onClick={() => setOpen(true)} edge="start">
        <MenuIcon style={{ color: "#2463e9" }} />
      </IconButton>
      <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Content />
      </SwipeableDrawer>
    </div>
  );
};

export default MobileDrawer;
