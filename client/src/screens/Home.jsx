import SideBar from "../components/sidebar/SideBar";
import Card from "../components/Card";
import WinSize from "../components/WinSize";
import AppBar from "../components/AppBar";
import ProductTable from "../components/ProductTable";
import { useSelector } from "react-redux";
import CategoryTable from "../components/Categories";
const Home = () => {
  const change = useSelector((state) => state.changer.value);

  const homeStyles = {
    main: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      backgroundColor: "#d3dbd5",
    },
    mainpage: {
      display: "flex",
      flexDirection: "column",
      marginTop: "40px",
    },
    cardcollection: {
      display: "flex",
      flexDirection: WinSize() < 1000 ? "column" : "row",
    },
  };

  return (
    <div className="main" style={homeStyles.main}>
      <SideBar />
      <div className="mainpage" style={homeStyles.mainpage}>
        <AppBar />
        <div className="cardcollection" style={homeStyles.cardcollection}>
          <Card count={1200} t1={"Brand New"} t2={"Products"} />
          <Card count={456} t1={"Diffrent"} t2={"Categories"} />
          <Card count={5500} t1={"Active"} t2={"Users"} />
        </div>
        {change ? <ProductTable /> : <CategoryTable />}
      </div>
    </div>
  );
};

export default Home;
