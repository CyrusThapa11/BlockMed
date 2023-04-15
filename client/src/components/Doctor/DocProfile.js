import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  WrapItem,
} from "@chakra-ui/react";

const DocProfile = () => {
  return (
    <>
      <Box>
        <div>Doc - Profile</div>
        <Flex flexDir={"column"}>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <WrapItem>
                <Avatar
                  size="lg"
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />{" "}
              </WrapItem>
              <FormControl w="50%" id="userName" isRequired>
                <FormLabel>Profile</FormLabel>
                <Input
                  placeholder="Image"
                  _placeholder={{ color: "gray.500" }}
                  type="file"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="UserName"
                  _placeholder={{ color: "gray.500" }}
                  type="Email"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  _placeholder={{ color: "gray.500" }}
                  type="password"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Box>
            <Button variant={"outline"}>Update auth details</Button>
          </Box>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="UserName"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  placeholder="Age"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input
                  placeholder="Phone "
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Ethereum Address</FormLabel>
                <Input
                  placeholder="Eth address"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  placeholder="DOB"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Base Fee</FormLabel>
                <Input
                  placeholder="Base Fee"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Home Address</FormLabel>
                <Input
                  placeholder="Home Address"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="userName" isRequired>
                <FormLabel>Hospital</FormLabel>
                <Input
                  placeholder="Hospital"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Box>
            <Button variant={"outline"}>Update credentials</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DocProfile;
