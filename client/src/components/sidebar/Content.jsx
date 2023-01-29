import ListItem from "@mui/material/ListItem";
import SettingsIcon from "@mui/icons-material/Settings";
import List from "@mui/material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { change } from "../../ProductSlice";

const Content = () => {
  const dispatch = useDispatch();

  const SideBarStyles = {
    box: { width: "250px", height: "100%", marginTop: "5%", marginLeft: "3%" },
    name: { color: "#2463e9", fontWeight: "bold" },
    icon: { color: "grey" },
    text: { color: "grey", fontWeight: "bold", marginLeft: 10 },
    setting: { marginTop: "55vh" },
  };
  return (
    <div className="box" style={SideBarStyles.box}>
      <Typography variant="h4" style={SideBarStyles.name}>
        DASHIDEA
      </Typography>
      <List component="nav" aria-label="mailbox folders">
        <ListItem button>
          <DashboardIcon style={SideBarStyles.icon} />
          <Typography style={SideBarStyles.text}>Dashboard</Typography>
        </ListItem>
        <ListItem button onClick={() => dispatch(change(true))}>
          <ShoppingCartIcon style={SideBarStyles.icon} />
          <Typography style={SideBarStyles.text}>Products</Typography>
        </ListItem>
        <ListItem button onClick={() => dispatch(change(false))}>
          <CategoryIcon style={SideBarStyles.icon} />
          <Typography style={SideBarStyles.text}>Categories</Typography>
        </ListItem>

        <ListItem button style={SideBarStyles.setting}>
          <SettingsIcon style={SideBarStyles.icon} />
          <Typography style={SideBarStyles.text}>Settings</Typography>
        </ListItem>
        <ListItem button>
          <LogoutIcon style={SideBarStyles.icon} />
          <Typography style={SideBarStyles.text}>Logout</Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default Content;
