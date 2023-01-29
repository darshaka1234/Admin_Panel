import Content from "./Content";
import MobileDrawer from "./MobileDrawer";
import WinSize from "./../WinSize";

const SideBar = () => {
  return (
    <div className="drawer" style={{ background: "white" }}>
      {WinSize() < 1000 ? <MobileDrawer /> : <Content />}
    </div>
  );
};

export default SideBar;
