import { Avatar, Badge, InputBase } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

const AppBar = () => {
  const appbarStyles = {
    text: {
      fontWeight: "700",
      color: "grey",
      fontSize: "20px",
      marginLeft: "30px",
    },
    appbar: { display: "flex", flexDirection: "row", marginLeft: "17px" },
    search: {
      marginLeft: "20px",
      display: "flex",
      flexDirection: "row",

      width: "700px",
    },
    icon: { margin: "-50px" },
  };
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "100%",
  }));
  return (
    <div className="appbar" style={appbarStyles.appbar}>
      <Search style={appbarStyles.search}>
        <SearchIcon style={{ color: "grey", marginTop: "10px" }} />
        <InputBase placeholder="search..." style={{ marginTop: "10px" }} />
      </Search>
      <Badge color="primary" variant="dot" style={{ marginTop: "10px" }}>
        <NotificationsNoneIcon sx={{ marginLeft: 17 }} />
      </Badge>
      <Avatar src="./img.jpg" sx={{ width: 40, height: 40, marginLeft: 3 }} />
    </div>
  );
};

export default AppBar;
