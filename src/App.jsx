import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Gallery from "./components/pages/gallery";
import Contact from "./components/pages/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
