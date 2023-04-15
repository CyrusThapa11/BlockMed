import { EthProvider } from "./contexts/EthContext";

import { Routes, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Home from "./pages/Common/Home";
import "./style.css";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import HospitalHome from "./pages/Hospital/HospitalHome";
import PatientHome from "./pages/Patient/PatientHome";
import DoctorHome from "./pages/Doctor/DoctorHome";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
    <>
      <EthProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Register />} />
          <Route path="/hospital/" exact element={<HospitalHome />} />
          <Route path="/patient/" exact element={<PatientHome />} />
          <Route path="/doctor/" exact element={<DoctorHome />} />
          <Route path="/admin/" exact element={<AdminHome />} />
          <Route path="/auth" exact element={<Register />} />

          {/* <Route path="/register/" element={<Register />} /> */}
        </Routes>
        <Footer />
      </EthProvider>
    </>
  );
}

export default App;
