import React from "react";
import {
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

const MyAppointments = () => {
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
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>0.91444</Td>
            <Td>Pending</Td>
            <Td>VIEW</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MyAppointments;
