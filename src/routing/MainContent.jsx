import { Route, Routes } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import RoutePage from "../pages/Routes";

export default function MainContent() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="routes" element={<RoutePage />} />
      </Route>
    </Routes>
  );
}
