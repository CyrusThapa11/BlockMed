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
import { Link } from "react-router-dom";

const ViewPatientRecords = () => {
  // 0x1CD08d25D75fecE6f5a02B65877d283D7904B5f7

  const {
    state: { accounts, contract },
    dispatch,
  } = useEth();
  const [Records, setRecords] = useState(null);
  const [PatientID, setPatientID] = useState(null);
  const getPatientRecords = async () => {
    // console.log(" getPatientRecords ", PatientID);
    // getPatientRecords
    const allRecords = await contract.methods
      .getPatientRecords(PatientID)
      .call({ from: accounts[0] });
    // console.log("allRecords of ", accounts[0], allRecords);
    setRecords(allRecords);
  };
  useEffect(() => {
    // effect
    // getPatientRecords();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <h1>PatientRecords</h1>

      <Box>
        <Input
          w="15vw"
          mx="2"
          type="text"
          onChange={(e) => setPatientID(e.target.value)}
        />
        <Button mx="2" onClick={() => getPatientRecords()}>
          Enter Eth Address
        </Button>
      </Box>
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
              <Td>VIEW</Td>
            </Tr>
            {Records?.map((rec, index) => {
              return (
                <Tr>
                  <Td> {`${index}`} </Td>
                  <Td> {rec?.docname || `Doc no. ${index}`} </Td>
                  <Td>{rec.fileHashes}</Td>
                  <Td>{rec.presciptions}</Td>
                  <Td>{new Date(rec.timeStamp * 1000).toLocaleString()} </Td>
                  <Td>
                    {/* <Link  ></Link> */}
                    <Button
                      border="2px"
                      borderColor="blackAlpha.900"
                      onClick={() => {
                        // getPatientRecords()
                        dispatch({
                          type: actions.changeDoctorSideBarState,
                          data: 5,
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

export default ViewPatientRecords;
