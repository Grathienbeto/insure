import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";

// CSS
import "./App.css";
import { Standouts } from "./components/standouts/Standouts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Standouts />
    </>
  );
}

export default App;
