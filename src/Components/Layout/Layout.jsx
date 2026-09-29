import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import { Navbar } from "../Navbar/Navbar.jsx";

const Layout = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        {/* Content */}

        <main className="pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
