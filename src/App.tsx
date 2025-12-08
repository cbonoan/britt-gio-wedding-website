import "./styles/colors.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Home } from "./components/pages/Home";
import { Story } from "./components/pages/Story";
import { Registry } from "./components/pages/Registry";
import DressCode from "./components/pages/DressCode";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/dress-code" element={<DressCode />} />
      </Routes>
    </Router>
  );
}

export default App;
