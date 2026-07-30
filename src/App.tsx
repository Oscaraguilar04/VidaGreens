import { Craft } from "./components/Craft";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Nav } from "./components/Nav";
import { Visit } from "./components/Visit";

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Craft />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
