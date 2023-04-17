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

const ViewRecord = () => {
  const [Document, setDocument] = useState(null);

  const {
    state: { contract },
    state,
  } = useEth();

  const openInNewTab = (url) => {
    console.log("state.recordInView.fileHashes", state.recordInView.fileHashes);
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <h2>ViewRecord</h2>
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
                  >
                    View All Files :{" "}
                  </Text>
                </Box>
                <Box>
                  <Text>
                    Date of appointment :{" "}
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
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default ViewRecord;
