import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterDonor from "./pages/RegisterDonor";
import FindDonor from "./pages/FindDonor";
import Awareness from "./pages/Awareness";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      {/* No max-w, no mx-auto, no padding wrapper here */}
      <div> {/* push content below fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterDonor />} />
          <Route path="/find" element={<FindDonor />} />
          <Route path="/awareness" element={<Awareness />} />
        </Routes>
         <Footer /> 
      </div>
    </>
  );
}
