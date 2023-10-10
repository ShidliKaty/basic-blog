import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <ScrollRestoration />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
