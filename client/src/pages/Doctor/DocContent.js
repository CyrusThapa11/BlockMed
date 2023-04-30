/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import DocProfile from "../../components/Doctor/DocProfile";
import DoctorPresciptions from "./../../components/Doctor/DoctorPresciptions";
import DoctorAppointments from "../../components/Doctor/DoctorAppointments";
import StartAppointment from "../../components/Doctor/StartAppointment";
import { useEth } from "../../contexts/EthContext";
import PatientRecords from "../../components/Patient/PatientRecords";
import ViewPatientRecords from "../../components/Doctor/ViewPatientRecords";
import ViewOneRecord from "../../components/Doctor/ViewOneRecord";

const DocContent = ({ state2 }) => {
  const { state } = useEth();

  return (
    <>
      <Card bgColor="#B39DDB" boxShadow={"md"}>
        <CardBody>
          <Stack spacing="4">
            {/* CHANGE COMPONENTS HERE  */}
            {/* <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box> */}
            {state.changeDoctorSideBarState === 0 ? (
              <>
                <DocProfile />
              </>
            ) : (
              <></>
            )}
            {state.changeDoctorSideBarState === 1 ? (
              <>
                <DoctorPresciptions />
              </>
            ) : (
              <></>
            )}
            {state.changeDoctorSideBarState === 2 ? (
              <>
                <DoctorAppointments />
              </>
            ) : (
              <></>
            )}
            {state.changeDoctorSideBarState === 3 ? (
              <>
                <StartAppointment />
              </>
            ) : (
              <></>
            )}
            {state.changeDoctorSideBarState === 4 ? (
              <>
                {/* SHOW PATIENTS RECORD  */}
                <ViewPatientRecords />
              </>
            ) : (
              <></>
            )}
            {state.changeDoctorSideBarState === 5 ? (
              <>
                {/* SHOW PATIENTS RECORD  */}
                <ViewOneRecord />
              </>
            ) : (
              <></>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default DocContent;
