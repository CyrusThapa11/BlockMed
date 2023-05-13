/* eslint-disable no-unused-vars */
import {
  Box,
  Input,
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
import React, { useEffect, useState } from "react";
import useEth from "./../../contexts/EthContext/useEth";
import { Button } from "@chakra-ui/react";
import { actions } from "../../contexts/EthContext";

const PatientRecords = () => {
  // 0x1CD08d25D75fecE6f5a02B65877d283D7904B5f7

  const {
    state: { accounts, contract },
    dispatch,
  } = useEth();
  const [Records, setRecords] = useState(null);
  const [DoctorAccess, setDoctorAccess] = useState(null);
  const getPatientRecords = async () => {
    // console.log(" getPatientRecords ");
    // getPatientRecords
    const allRecords = await contract.methods
      .getPatientRecords(accounts[0])
      .call({ from: accounts[0] });
    // console.log("allRecords of ", accounts[0], allRecords);
    setRecords(allRecords);
  };
  useEffect(() => {
    // effect
    getPatientRecords();
    return () => {
      // cleanup
    };
  }, []);

  const GiveDoctorAccess = async () => {
    // console.log("GiveDoctorAccess");
    console.log("DoctorAccess", DoctorAccess);
    try {
      // update to blockchain

      await contract.methods
        .updateRecordAccess(DoctorAccess)
        .send({ from: accounts[0] });
      // showToast("success", "Successfully updated details");
    } catch (error) {
      console.log("error", error);
      // showToast("error", "Some Error in your contract");
    }
  };

  return (
    <>
      <h1>PatientRecords</h1>

      <Box>
        <Input
          w="15vw"
          mx="2"
          type="text"
          onChange={(e) => setDoctorAccess(e.target.value)}
        />
        <Button mx="2" onClick={() => GiveDoctorAccess()}>
          Add Doctor to view
        </Button>
      </Box>
      <TableContainer>
        <Table colorScheme="teal">
          <Thead>
            <Tr>
              <Th> Sno </Th>
              <Th> Doctor Name</Th>
              <Th>Doctor Address</Th>
              <Th> Date of appointment </Th>
              <Th>View</Th>
              {/* <Th>Download</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {Records?.map((rec, index) => {
              return (
                <Tr>
                  <Td> {`${index}`} </Td>
                  <Td> {rec?.docname || `Doc no. ${index}`} </Td>
                  <Td>{rec.doctor_}</Td>
                  <Td>{new Date(rec.timeStamp * 1000).toLocaleString()} </Td>
                  <Td>
                    <Button
                      border="2px"
                      borderColor="blackAlpha.900"
                      onClick={() => {
                        dispatch({
                          type: actions.changePatientSideBarState,
                          data: 7,
                        });
                        dispatch({
                          type: actions.recordInView,
                          data: rec,
                        });
                      }}
                    >
                      VIEW
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PatientRecords;
