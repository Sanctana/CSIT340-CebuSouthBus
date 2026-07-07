import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BusForm from "../components/BusForm";

export default function Home() {
  // State for a simple counter or dynamic content
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Simulate fetching data on component mount
  useEffect(() => {
    // Mock data
    const mockItems = ["React", "Vue", "Angular", "Svelte"];
    setItems(mockItems);
  }, []);

  return (<>
      <Navbar />
        <Hero />
      <Footer />
    </>
  );
}
