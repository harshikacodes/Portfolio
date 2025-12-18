import Navbar from "./components/Navbar";
import "./styles/globals.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
