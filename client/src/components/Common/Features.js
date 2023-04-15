import React from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box pos={"relative"}>
      <Center>
        <Box pos={"absolute"} top={"-14"} blur="2px">
          <>
            {/* <Text center as={"h1"}>
              <Center> Our Offer</Center>
            </Text> */}
          </>
          <Center>
            <Flex
              h="40vh"
              justifyContent={"space-between"}
              px="14"
              py="5"
              // bg="gray.200"
              blur="2px"
              bg={"whiteAlpha.500"}
              w="70vw"
              rounded={"lg"}
            >
              <Flex
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
                px="4"
              >
                <Image rounded="md" w="15vw" src="/secure1.jpg" />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati, cum!
                </Text>
              </Flex>
              <Flex
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
                px="4"
              >
                <Image rounded="md" w="15vw" src="/secure.jpg" />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati, cum!
                </Text>
              </Flex>
              <Flex
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
                px="4"
              >
                <Image rounded="md" w="15vw" src="/secure3.jpg" />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati, cum!
                </Text>
              </Flex>
            </Flex>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Features;
