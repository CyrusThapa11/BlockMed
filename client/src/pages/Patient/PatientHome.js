/* eslint-disable no-unused-vars */
import { Box, Button, Center, Flex, Hide, Text } from "@chakra-ui/react";
import React from "react";
// ImHome
import { ImHome } from "react-icons/im";
import { RiDashboardFill } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import MainContent from "./MainContent";
import { useState } from "react";
import { actions, useEth } from "../../contexts/EthContext";

const PatientHome = () => {
  // const [state, setstate] = useState(0);
  const {
    state: { contract, accounts },
    dispatch,
  } = useEth();
  return (
    <Box>
      <Box
        display="flex"
        // alignItems={"center"}
        justifyContent={"space-between"}
        // border="2px"
        // borderColor="red.300"
      >
        <Box pos="sticky" top="10" left="0" maxH="100vh">
          {" "}
          <Box
            // border="2px"
            w="20vw"
            h="full"
            px="3"
            py="5"
            bgColor={"#19376D"}
            display={{ base: "none", sm: "none", md: "block" }}
          >
            <Center flexDir={"column"}>
              <Button>Click</Button>
              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                px="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(0);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 0,
                  });
                }}
              >
                {" "}
                <ImHome size={25} /> <Text ml="4">Home</Text>{" "}
              </Box>

              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                pl="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(0);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 0,
                  });
                }}
              >
                {" "}
                <RiDashboardFill size={25} /> <Text ml="4">Profile</Text>{" "}
              </Box>
              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                pl="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(1);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 1,
                  });
                }}
              >
                {" "}
                <RiDashboardFill size={25} /> <Text ml="4">My Records</Text>{" "}
              </Box>
              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                pl="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(2);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 2,
                  });
                }}
              >
                {" "}
                <RiDashboardFill size={25} />{" "}
                <Text ml="4">Book Appointment</Text>{" "}
              </Box>
              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                pl="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(6);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 6,
                  });
                }}
              >
                {" "}
                <RiDashboardFill size={25} /> <Text ml="4">View Doctor</Text>{" "}
              </Box>
              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                pl="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(3);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 3,
                  });
                }}
              >
                {" "}
                <RiDashboardFill size={25} /> <Text ml="4">My Appoinment</Text>{" "}
              </Box>
              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                pl="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(4);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 4,
                  });
                }}
              >
                {" "}
                <BiHelpCircle size={25} /> <Text ml="4">Help</Text>{" "}
              </Box>
              <Box
                my="2"
                display="flex"
                justifyContent={"flex-start"}
                alignItems={"center"}
                w="full"
                p="2"
                pl="5"
                _hover={{ bgColor: "#576CBC", rounded: "md" }}
                color="#A5D7E8"
                cursor="pointer"
                onClick={() => {
                  // setstate(5);
                  dispatch({
                    type: actions.changePatientSideBarState,
                    data: 5,
                  });
                }}
              >
                <MdSettings size={25} /> <Text ml="4">Settings</Text>{" "}
              </Box>
            </Center>
          </Box>
        </Box>

        <Box
          w="75vw"
          pr="10"
          //  border="2px" borderColor="red.300"
        >
          <Box minH="75vh">
            <MainContent
            // state={state}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientHome;
