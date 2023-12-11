import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Standouts } from "./components/standouts/Standouts";
import { Cta } from "./components/cta/Cta";

// CSS
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Standouts />
      <Cta />
    </>
  );
}

export default App;
