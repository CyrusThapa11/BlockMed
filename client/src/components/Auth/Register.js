import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import DoctorAuth from "./DoctorAuth";
import HospitalAuth from "./HospitalAuth";
import PatientAuth from "./PatientAuth";
import AdminAuth from "./AdminAuth";
const Register = () => {
  const [state, setState] = useState(0);

  return (
    <Box>
      <Box
        bgImage={"/loginbg.jpg"}
        // w="100vw"
        h="100vh"
        bgPosition={"center"}
        bgSize={"contain"}
        overflowX={"hidden"}
        bgRepeat={"no-repeat"}
      >
        <Center>
          <Box w="40vw" py="10">
            <Flex flexDir={"column"} alignItems={"center"}>
              <Grid my="3" templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem
                  py="5"
                  cursor="pointer"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDir="column"
                  w="13vw"
                  h="15vh"
                  bg="whiteAlpha.500"
                  _hover={{
                    bg: "cyan.300",
                  }}
                  rounded="lg"
                  onClick={() => setState(0)}
                >
                  <Image my="2" src="doc.svg" w="3vw" />
                  <Text>Login To Doctor</Text>
                </GridItem>
                <GridItem
                  py="5"
                  cursor="pointer"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDir="column"
                  w="13vw"
                  h="15vh"
                  bg="whiteAlpha.500"
                  _hover={{
                    bg: "cyan.300",
                  }}
                  rounded="lg"
                  onClick={() => setState(1)}
                >
                  <Image my="2" src="hospital.svg" w="3vw" />
                  <Text>Login To Hospital</Text>
                </GridItem>
              </Grid>
              <Grid my="3" templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem
                  py="5"
                  cursor="pointer"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDir="column"
                  w="13vw"
                  h="15vh"
                  bg="whiteAlpha.500"
                  _hover={{
                    bg: "cyan.300",
                  }}
                  rounded="lg"
                  onClick={() => setState(2)}
                >
                  <Image my="2" src="patient.png" w="3vw" />
                  <Text>Login To Patient</Text>
                </GridItem>
                <GridItem
                  py="5"
                  cursor="pointer"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDir="column"
                  w="13vw"
                  h="15vh"
                  bg="whiteAlpha.500"
                  _hover={{
                    bg: "cyan.300",
                  }}
                  rounded="lg"
                  onClick={() => setState(3)}
                >
                  <Image my="2" src="admin.png" w="3vw" />
                  <Text>Login To Admin</Text>
                </GridItem>
              </Grid>
            </Flex>
          </Box>
        </Center>
        <Center>
          <Box w="30vw" py="2" bg="whiteAlpha.500">
            {state === 0 ? (
              <>
                <DoctorAuth />
              </>
            ) : (
              <></>
            )}
            {state === 1 ? (
              <>
                <HospitalAuth />
              </>
            ) : (
              <></>
            )}
            {state === 2 ? (
              <>
                <PatientAuth />
              </>
            ) : (
              <></>
            )}
            {state === 3 ? (
              <>
                <AdminAuth />
              </>
            ) : (
              <></>
            )}
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Register;
