import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import Support from "./sections/Support";
import Tokenomics from "./sections/Tokenomics";

function App() {
  return (
    <div className="App bg-[#191A19]">
      <Navbar />
      <div className="pt-[85px] max-w-6xl mx-auto px-5">
        <Hero />
        <About />
        <Tokenomics />
      </div>
      <Partners />

      <div className="pt-[85px] max-w-6xl mx-auto px-5">
        <Support />
      </div>
    </div>
  );
}

export default App;
