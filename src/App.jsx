 import "./app.scss" 
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Test from "./Test";
  
  const App = () => {
  return <div>
    <cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
      <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section> 
    {/* <Test/>
    <Test/> */}
    
  </div>;
};

export default App;
