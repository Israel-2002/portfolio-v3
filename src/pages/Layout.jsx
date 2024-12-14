import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-80">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
