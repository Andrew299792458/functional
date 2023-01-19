import { Routing } from "./Routes";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/footer"
import { Functional } from "./components/functional";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(true)


  return (
    <div className="App">
      {/* <Routing />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer /> */}
      <button onClick={() => setFlag(prev => !flag)}>Click2</button>
      {flag ? <Functional title={"text"} /> : null}
    </div>
  );
}

export default App;
