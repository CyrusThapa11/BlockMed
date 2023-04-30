import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEth } from "../../contexts/EthContext";

const ViewOneRecord = () => {
  const [Document, setDocument] = useState(null);

  const {
    state: { contract },
    state,
  } = useEth();

  // console.log("state.recordInView", state.recordInView);
  const openInNewTab = (url) => {
    // console.log("state.recordInView.fileHashes", state.recordInView.fileHashes);
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <Box minH="74vh">
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Box>
                  <Text>Doctor name : {state.recordInView.docname} </Text>
                </Box>
                <Box>
                  <Text>
                    Doctor addr : {state.recordInView.doctor_.slice(0, 10)}
                  </Text>
                </Box>
                <Box>
                  <Text>Patient name : {state.recordInView.patientName} </Text>
                </Box>
                <Box>
                  <Text>
                    Patient name : {state.recordInView.patientaddr.slice(0, 10)}
                  </Text>
                </Box>
                <Box>
                  <Text
                    onClick={() =>
                      openInNewTab(
                        `https://dweb.link/ipfs/${state.recordInView.fileHashes}`
                      )
                    }
                    cursor={"pointer"}
                    as="u"
                  >
                    Click To view Files
                  </Text>
                </Box>
                <Box>
                  <Text>
                    Date of appointment
                    {new Date(
                      state.recordInView.timeStamp * 1000
                    ).toLocaleString()}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md"> Prescription Details </Heading>
                <Box
                  display={"flex"}
                  flexDir="column"
                  justifyContent={"space-evenly"}
                >
                  <Box display="flex" justifyContent={"space-between"}>
                    <Text textAlign={"center"}> Name </Text>
                    <Text textAlign={"center"}> Amount </Text>
                    <Text textAlign={"center"}> Dosage </Text>
                  </Box>
                  {state.recordInView.presciptions.split("|").map((record_) => {
                    // console.log("record_", record_);
                    let details_ = record_.split(",");
                    return (
                      <>
                        <Box display="flex" justifyContent={"space-between"}>
                          <Text> {details_[0]} </Text>
                          <Text> {details_[1]} </Text>
                          <Text> {details_[2]} </Text>
                        </Box>
                      </>
                    );
                  })}
                </Box>
                <Heading size="md"> Final Remarks </Heading>

                <Text>
                  {state.recordInView.finalRemarks ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui consectetur accusantium culpa veritatis ipsum sapiente porro delectus aut optio."}
                </Text>
                {/* <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text> */}
              </Stack>
            </CardBody>
            {/* <Divider /> */}
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Click to Print
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default ViewOneRecord;
