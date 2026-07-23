import { BrowserRouter } from "react-router";
import MainContent from "./MainContent";
import ScrollToTop from "../components/commons/ScrollToTop.jsx";

export default function Routing() {
  return (
    <BrowserRouter>
        <ScrollToTop />
      <MainContent />
    </BrowserRouter>
  );
}
