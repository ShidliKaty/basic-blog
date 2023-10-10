import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
