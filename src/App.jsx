import "./App.scss";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services" style={{ height: "100vh", padding: "0" }}>
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio" style={{ height: "100vh", padding: "0" }}>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact" style={{ height: "100vh", padding: "0" }}>
        <Contact />
      </section>
    </div>
  );
};

export default App;
