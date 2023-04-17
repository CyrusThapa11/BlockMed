import React from "react";
import { Box, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box className="header " h="auto" minH="75vh">
        <Flex px="24" py="16" alignItems={"center"}>
          <Box w="60vh " px="10" py="6">
            <Center>
              <Text>We Are Here To Help You, Your Health Matters!</Text>
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Image w={"40vw"} src="/ehr-1.png" alt="Dan Abramov" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
