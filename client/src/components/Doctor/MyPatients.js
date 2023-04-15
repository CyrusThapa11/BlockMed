import React from "react";
import { Flex } from "@chakra-ui/react";
import PatientCard from "../Patient/PatientCard";

const MyPatients = () => {
  return (
    <>
      MyPatients
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

export default MyPatients;
