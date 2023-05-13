/* eslint-disable no-unused-vars */
import { EthContext, EthProvider, useEth } from "./contexts/EthContext";

import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Auth/Register";
import Home from "./pages/Common/Home";
import "./style.css";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import HospitalHome from "./pages/Hospital/HospitalHome";
import PatientHome from "./pages/Patient/PatientHome";
import DoctorHome from "./pages/Doctor/DoctorHome";
import AdminHome from "./pages/Admin/AdminHome";
import BookDoctor from "./pages/Doctor/BookDoctor";
import { useContext } from "react";
import Error from "./components/Common/Error";

function App() {
  const { state } = useEth();
  // const GobalState = useContext(EthContext);
  // const GobalState = useContext(EthContext).state;
  // console.log("GobalState", GobalState);
  return (
    <>
      {/* <EthProvider> */}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Register />} />
        <Route path="/hospital/" exact element={<HospitalHome />} />
        <Route
          path="/patient/"
          exact
          element={
            state.role !== null && state.role === "patient" ? (
              <>
                <PatientHome />
              </>
            ) : (
              <>
                <Navigate to="/" />
              </>
            )

            // <PatientHome />
          }
        />
        <Route
          path="/doctor/"
          exact
          //
          // <DoctorHome />
          element={
            state.role !== null && state.role === "doctor" ? (
              <>
                <DoctorHome />
              </>
            ) : (
              <>
                <Navigate to="/" />
              </>
            )
          }
        />
        <Route
          path="/doctor/:id"
          exact
          element={
            state.role !== null && state.role === "patient" ? (
              <>
                <BookDoctor />
              </>
            ) : (
              <>
                <Navigate to="/" />
              </>
            )
          }
        />
        <Route path="/admin/" exact element={<AdminHome />} />
        <Route path="/auth" exact element={<Register />} />
        <Route path="*" exact element={<Error />} />
        {/* <Route path="/register/" element={<Register />} /> */}
      </Routes>
      <Footer />
      {/* </EthProvider> */}
    </>
  );
}

export default App;
