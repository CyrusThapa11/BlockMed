import React from "react";
import PatientCard from "../Patient/PatientCard";
import { Flex } from "@chakra-ui/react";

const DoctorPresciptions = () => {
  return (
    <>
      DoctorPresciptions
      {/* card */}
      <Flex flexWrap={"wrap"} gap="3">
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
      </Flex>
    </>
  );
};

export default DoctorPresciptions;
