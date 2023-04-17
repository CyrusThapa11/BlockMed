/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Center, Flex, Hide, Text } from "@chakra-ui/react";

// ImHome
import { ImHome } from "react-icons/im";
import { RiDashboardFill } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import DocContent from "./DocContent";
import { useState } from "react";

const BookDoctor = () => {
  const [state, setstate] = useState(0);
  return (
    <div>
      <Box>
        <Box
          display="flex"
          // alignItems={"center"}
          justifyContent={"space-between"}
          // border="2px"
          // borderColor="red.300"
        >
          <Box pos="sticky" top="10" left="0" maxH="100vh">
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
                >
                  <ImHome size={25} /> <Text ml="4">Home</Text>
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
                  onClick={() => setstate(0)}
                >
                  <RiDashboardFill size={25} /> <Text ml="4">Profile</Text>
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
                  onClick={() => setstate(1)}
                >
                  <RiDashboardFill size={25} />
                  <Text ml="4">My Prescriptions</Text>
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
                  onClick={() => setstate(2)}
                >
                  <RiDashboardFill size={25} /> <Text ml="4"> Appoinments</Text>
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
                  onClick={() => setstate(3)}
                >
                  <RiDashboardFill size={25} />
                  <Text ml="4">Start appoinment</Text>
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
                >
                  <RiDashboardFill size={25} /> <Text ml="4">Billings</Text>
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
                >
                  <BiHelpCircle size={25} /> <Text ml="4">Help</Text>
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
                >
                  <MdSettings size={25} /> <Text ml="4">Settings</Text>
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
              <Box>
                <h2>Book a doctor </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, labore laborum obcaecati suscipit reprehenderit
                debitis amet odio mollitia et vel!
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BookDoctor;
