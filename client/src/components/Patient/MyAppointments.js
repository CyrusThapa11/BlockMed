/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { actions, useEth } from "../../contexts/EthContext";

const MyAppointments = () => {
  const {
    state: { accounts, contract },
    dispatch,
  } = useEth();
  const [Appointments, setAppointments] = useState(null);
  const [PatientID, setPatientID] = useState(null);

  // const [DoctorAppointments, setDoctorAppointments] = useState(null);

  const getDocAppointment = async () => {
    const patientDetailsAppointment = await contract.methods
      .getPatientAppointment(accounts[0])
      .call({ from: accounts[0] });

    console.log("patientDetailsAppointment", patientDetailsAppointment);
    let newAppointments = [];
    patientDetailsAppointment.forEach((app, indexx) => {
      newAppointments.push({ ...app, indexx });
    });
    setAppointments(newAppointments);
  };

  const startPatientAppointment = async (indexx, timeslot, roomid) => {
    console.log("startPatientAppointment indexx ", indexx);
    // update state in blockchain
    let startTime = Date.parse(new Date()) / 1000;
    console.log("startTime", startTime);
    // const doctorDetailsAppointment = await contract.methods
    //   .startAppointment(indexx, startTime)
    //   .send({ from: accounts[0] });
    // update the state in react app for current patient
    // dispatch({
    //   type: actions.patientInView,
    //   data: Appointments[indexx].patient_,
    // });

    dispatch({
      type: actions.addROOMID,
      data: roomid,
    });
    dispatch({
      type: actions.changePatientSideBarState,
      data: 8,
    });
  };

  useEffect(() => {
    getDocAppointment();
    return () => {};
  }, []);

  return (
    <TableContainer>
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
          <Tr>
            <Td>feet</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
            <Td>Pending</Td>
            <Td>VIEW</Td>
          </Tr>
          {Appointments?.map((appointment, index) => {
            return (
              <Tr key={appointment.timeslot_}>
                <Td>{index + 1}</Td>
                <Td> {appointment.doctor_.slice(0, 10)} </Td>
                <Td>{appointment.docname || "Docname"}</Td>
                <Td>
                  {new Date(
                    parseInt(appointment.timeslot_) * 1000
                  ).toLocaleString()}
                </Td>

                <Td>700$</Td>
                <Td>{appointment.status === true ? "Ongoing" : "Pending"}</Td>
                <Td>
                  <Button
                    size="sm"
                    variant={"outline"}
                    onClick={
                      () =>
                        startPatientAppointment(
                          appointment.indexx,
                          appointment.timeslot_,
                          appointment.id
                        )
                      // appointment.patient_ to state
                    }
                    // ! GO TO GOOGLE MEET LINK OF THE LINK !
                  >
                    Join
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MyAppointments;
