import "./App.css";
import Header from "./components/sections/Header/Header";
import HeroTransition from "./components/sections/HeroTransition/HeroTransition";
import HeroSection from "./components/sections/HeroSection/HeroSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeroTransition />
    </div>
  );
}

export default App;
