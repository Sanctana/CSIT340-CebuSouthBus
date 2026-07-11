import { Route, Routes } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AboutUs from "../pages/AboutUs";
import BusSchedule from "../pages/BusSchedule";
import Home from "../pages/Home";
import RoutePage from "../pages/Routes";
import Support from "../pages/Support";

export default function MainContent() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="routes" element={<RoutePage />} />
        <Route path="support" element={<Support />} />
        <Route path="schedule" element={<BusSchedule />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}
