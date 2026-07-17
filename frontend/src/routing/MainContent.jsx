import { Route, Routes } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AboutUs from "../pages/AboutUs";
import BusSchedule from "../pages/BusSchedule";
import Confirmation from "../pages/Confirmation";
import Home from "../pages/Home";
import PassengerDetails from "../pages/PassengerDetails";
import Review from "../pages/Review";
import RoutePage from "../pages/Routes";
import Support from "../pages/Support";
import TicketView from "../pages/TicketView";

export default function MainContent() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="routes" element={<RoutePage />} />
        <Route path="support" element={<Support />} />
        <Route path="schedule" element={<BusSchedule />} />
        <Route path="aboutus" element={<AboutUs />} />
<<<<<<< HEAD
        <Route path="passenger-details" element={<PassengerDetails />} />
        <Route path="review" element={<Review />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="ticket" element={<TicketView />} />
=======

        <Route path="passenger-details" element={<PassengerDetails />} />
        <Route path="review" element={<Review />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="ticket" element={<TicketView />} />
>>>>>>> b51b2b35148f19386d49c9b2d3550a38a9316ba4
      </Route>
    </Routes>
  );
}
