import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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

  return (
    <div className="home-container">
      <Navbar />

      <main className="home-main">
        <section className="home-section">
          <h2>Interactive Counter</h2>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </section>

        <section className="home-section">
          <h2>Frameworks List</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2026 My React App</p>
      </footer>
    </div>
  );
}
