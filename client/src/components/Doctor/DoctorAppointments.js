/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { actions, useEth } from "../../contexts/EthContext";

const DoctorAppointments = () => {
  const {
    state: { contract, accounts },
    state,
    dispatch,
  } = useEth();
  const [DoctorAppointments, setDoctorAppointments] = useState(null);

  const getDocAppointment = async () => {
    const doctorDetailsAppointment = await contract.methods
      .getDoctorAppointment(accounts[0])
      .call({ from: accounts[0] });

    console.log("doctorDetailsAppointment", doctorDetailsAppointment);
    let newAppointments = [];
    doctorDetailsAppointment.forEach((app, indexx) => {
      newAppointments.push({ ...app, indexx });
    });
    setDoctorAppointments(newAppointments);
  };

  const startPatientAppointment = async (indexx, timeslot) => {
    console.log("startPatientAppointment indexx ", indexx);

    // update state in blockchain

    let startTime = Date.parse(new Date()) / 1000;

    console.log("startTime", startTime);

    const doctorDetailsAppointment = await contract.methods
      .startAppointment(indexx, startTime)
      .send({ from: accounts[0] });

    // update the state in react app for current patient

    dispatch({
      type: actions.patientInView,
      data: DoctorAppointments[indexx].patient_,
    });
    dispatch({
      type: actions.changeDoctorSideBarState,
      data: 3,
    });
  };

  useEffect(() => {
    getDocAppointment();
    return () => {};
  }, []);

  return (
    <>
      DoctorAppointments
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minH="70vh"
      >
        <TableContainer maxH="60vh" overflow={"scroll"}>
          <Table colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th> Sno </Th>
                <Th> Doctor Name</Th>
                <Th>Doctor Address</Th>
                <Th> Date of appointment </Th>
                <Th isNumeric>Amount</Th>
                <Th>Status</Th>
                <Th>View</Th>
                {/* <Th>Download</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>Completed</Td>
                <Td>VIEW</Td>
              </Tr>
              {DoctorAppointments?.map((appointment, index) => {
                return (
                  <Tr key={appointment.timeslot_}>
                    <Td>{index + 1}</Td>
                    <Td> {appointment.patient_.slice(0, 10)} </Td>
                    <Td>{appointment.patientName || "Patient"}</Td>
                    <Td>
                      {new Date(
                        parseInt(appointment.timeslot_) * 1000
                      ).toLocaleString()}
                    </Td>

                    <Td>700$</Td>
                    <Td>
                      {appointment.status === true ? "Completed" : "Pending"}
                    </Td>
                    <Td>
                      <Button
                        size="sm"
                        variant={"outline"}
                        onClick={
                          () =>
                            startPatientAppointment(
                              appointment.indexx,
                              appointment.timeslot_
                            )
                          // appointment.patient_ to state
                        }
                      >
                        Start appointment
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
              {/* */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default DoctorAppointments;