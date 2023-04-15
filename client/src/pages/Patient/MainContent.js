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
import React, { useState } from "react";
import Profile from "../../components/Patient/Profile";
import PatientRecords from "../../components/Patient/PatientRecords";
import BookAppointment from "../../components/Patient/BookAppointment";
import MyAppointments from "../../components/Patient/MyAppointments";

const MainContent = ({state}) => {
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
            {state === 0 ? (
              <>
                {" "}
                <Profile />{" "}
              </>
            ) : (
              <></>
            )}
            {state === 1 ? (
              <>
                {" "}
                <PatientRecords />{" "}
              </>
            ) : (
              <></>
            )}
            {state === 2 ? (
              <>
                {" "}
                <BookAppointment />{" "}
              </>
            ) : (
              <></>
            )}
            {state === 3 ? (
              <>
                {" "}
                <MyAppointments />{" "}
              </>
            ) : (
              <></>
            )}
            {state === 4 ? (
              <>
                {" "}
                <Profile />{" "}
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
