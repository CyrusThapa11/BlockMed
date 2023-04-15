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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEth } from "../../contexts/EthContext";

const Profile = () => {
  const toast = useToast();
  const showToast = (
    statuss = "success",
    description = "Some Eror occured"
  ) => {
    toast({
      title: statuss,
      description: description,
      status: statuss,
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };
  const {
    state: { contract, accounts },
  } = useEth();
  const [User, setUser] = useState(null);
  const updateFirebase = () => {
    console.log("updateFirebase");
    let user = User;
    if (user.phone) delete user["phone"];
    if (user.age) delete user["age"];
    if (user.address) delete user["address"];
    if (user.dob) delete user["dob"];
    if (user.bloodgroup) delete user["bloodgroup"];
  };
  const update = async () => {
    try {
      console.log("update in blcokchain");
      console.log("User", User);
      let user = User;
      if (user.password) delete user["password"];
      if (user.image) delete user["image"];
      // update to blockchain

      await contract.methods
        .addPatient(
          user.name,
          parseInt(user.phone),
          parseInt(user.age),
          parseInt(user.dob),
          user.email
        )
        .send({ from: accounts[0] });
      showToast("success", "Successfully updated details");
    } catch (error) {
      console.log("error", error);
      showToast("error", "Some Error in your contract");
    }
  };

  return (
    <>
      <Box>
        <div>Profile</div>
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
              <FormControl w="50%" id="image" isRequired>
                <FormLabel>Profile</FormLabel>
                <Input
                  name="image"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="image"
                  _placeholder={{ color: "gray.500" }}
                  type="file"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="email"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="password"
                  _placeholder={{ color: "gray.500" }}
                  type="password"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Box>
            <Button variant={"outline"} onClick={() => updateFirebase()}>
              Update auth details
            </Button>
          </Box>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="age" isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  name="age"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="age"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input
                  name="phone"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="phone"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl id="address" isRequired>
                <FormLabel>Ethereum Address</FormLabel>
                <Input
                  name="address"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="address"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="dob" isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  name="dob"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="dob"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="bloodgroup" isRequired>
                <FormLabel>blood Group</FormLabel>
                <Input
                  name="bloodgroup"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="bloodgroup"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Box>
            <Button onClick={() => update()} variant={"outline"}>
              Update credentials
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Profile;
