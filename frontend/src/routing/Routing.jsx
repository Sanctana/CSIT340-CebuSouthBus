import { BrowserRouter } from "react-router";
import ScrollToTop from "../components/commons/ScrollToTop.jsx";
import MainContent from "./MainContent";

export default function Routing() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainContent />
    </BrowserRouter>
  );
}
