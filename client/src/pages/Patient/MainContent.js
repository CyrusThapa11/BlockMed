/* eslint-disable no-unused-vars */
import { Card, CardBody, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import Profile from "../../components/Patient/Profile";
import PatientRecords from "../../components/Patient/PatientRecords";
import BookAppointment from "../../components/Patient/BookAppointment";
import MyAppointments from "../../components/Patient/MyAppointments";
import ViewDoc from "./../../components/Doctor/ViewDoc";
import { useEth } from "../../contexts/EthContext";
import ViewRecord from "../../components/Patient/ViewRecord";
import AppointmentStart from "../../components/Patient/AppointmentStart";

const MainContent = ({ state2 }) => {
  const { state, dispatch } = useEth();
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
            {state.changePatientSideBarState === 0 ? (
              <>
                {" "}
                <Profile />{" "}
              </>
            ) : (
              <></>
            )}
            {state.changePatientSideBarState === 1 ? (
              <>
                {" "}
                <PatientRecords />{" "}
              </>
            ) : (
              <></>
            )}
            {state.changePatientSideBarState === 2 ? (
              <>
                {" "}
                <BookAppointment />{" "}
              </>
            ) : (
              <></>
            )}
            {state.changePatientSideBarState === 3 ? (
              <>
                {" "}
                <MyAppointments />{" "}
              </>
            ) : (
              <></>
            )}
            {state.changePatientSideBarState === 4 ? (
              <>
                {" "}
                <Profile />{" "}
              </>
            ) : (
              <></>
            )}
            {state.changePatientSideBarState === 6 ? (
              <>
                {" "}
                <ViewDoc />{" "}
              </>
            ) : (
              <></>
            )}
            {state.changePatientSideBarState === 7 ? (
              <>
                {" "}
                <ViewRecord />{" "}
              </>
            ) : (
              <></>
            )}
            {state.changePatientSideBarState === 8 ? (
              <>
                <AppointmentStart />
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

export default MainContent;
