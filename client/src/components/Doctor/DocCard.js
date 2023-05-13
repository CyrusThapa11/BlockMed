import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { actions, useEth } from "../../contexts/EthContext";
import { Link } from "react-router-dom";
import { Images } from "./../Common/Images";
import docdetails from "../Common/csvjson.json";

// const docdetails = JSON.parse(docdetails);
const DocCard = ({ name, email, address_, image, introduction, gender }) => {
  console.log("docdetails", docdetails);
  const { dispatch } = useEth();
  console.log("image", image);
  console.log("address_,", address_);
  // console.log("address_,", typeof address_);
  const ViewADoctor = () => {
    console.log("address_", address_);
    dispatch({
      type: actions.doctorInView,
      data: address_,
    });
    dispatch({
      type: actions.changePatientSideBarState,
      data: 6,
    });
    // changedoctorSideBarState
  };

  return (
    <>
      {/* <Box maxW={"22vw"} minW="20vw"> */}
      <Center py={6} flex="1" minH="40vh">
        <Box
          // w="full"
          h="full"
          minW={"20vw"}
          maxW="35vw"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={4}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={`${
              image ||
              Images[Math.floor(Math.random() * 10) % Images.length].url
            }`}
            alt={"Avatar Alt"}
            mb={3}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {name || "Lindsey James"}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={3}>
            @{email || "lindsey_jam3s"}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={3}>
            {docdetails[Math.floor(Math.random() * 10) % 5].education}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={3}>
            {gender || docdetails[Math.floor(Math.random() * 10) % 5].gender}
          </Text>
          {/* <Text fontWeight={600} color={"gray.500"} mb={3}>
            gender{email || "lindsey_jam3s"}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={3}>
            @{email || "lindsey_jam3s"}
          </Text> */}
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {address_?.slice(0, 20) ||
              // " I live in Shanghai from 2007, it’s almost 7years old. I have ever worked in the community health service centre in Chongming and Yangpu district. And now, I’m working in Juquan community, Baoshan district. As a doctor, my motto isDoing now what patients need".substring(
              //   0,
              //   30
              // )
              "0x0404BbE7b41c7e25b65aFbE8D67f27658D235c5F".slice(0, 20)}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {introduction?.substring(0, 60) ||
              " I live in Shanghai from 2007, it’s almost 7years old. I have ever worked in the community health service centre in Chongming and Yangpu district. And now, I’m working in Juquan community, Baoshan district. As a doctor, my motto isDoing now what patients need".substring(
                0,
                60
              )}
          </Text>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            {/* <Link to={`/doctor/${address_}`}> */}
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              onClick={() => ViewADoctor()}
            >
              Book/View
            </Button>{" "}
            {/* </Link> */}
          </Stack>
        </Box>
      </Center>
      {/* </Box>{" "} */}
    </>
  );
};
export default DocCard;
