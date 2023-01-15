

import { Routing } from "./Routes";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/footer"




function App() {
  return (
    <div className="App">


      <Routing />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
