import Navbar from "./components/Navbar";
import "./styles/globals.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
