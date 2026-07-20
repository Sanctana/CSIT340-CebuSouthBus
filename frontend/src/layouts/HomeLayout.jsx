import { Outlet } from "react-router";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
