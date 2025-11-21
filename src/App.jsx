import { HashRouter, Routes, Route } from "react-router";
import ScrollTop from "./components/ScrollTop";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Archived from "./pages/Archived";

function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/archived" element={<Archived />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
