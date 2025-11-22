import { HashRouter, Routes, Route } from "react-router";
import ScrollTop from "./components/ScrollTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Archived from "./pages/Archived";

function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archived" element={<Archived />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
