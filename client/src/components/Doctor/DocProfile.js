import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import { useEth } from "../../contexts/EthContext";

const DocProfile = () => {
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
        .addDoctor(user.name, user.email, accounts[0], parseInt(user.basefee))
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
                  name="name"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Image"
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
              <FormControl id="Password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
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
              <FormControl id="Name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Name"
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
                  placeholder="Age"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="Phone No" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input
                  name="phone"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Phone "
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl id="eth address" isRequired>
                <FormLabel>Ethereum Address</FormLabel>
                <Input
                  name="address"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Eth address"
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
                  placeholder="DOB"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="basefee" isRequired>
                <FormLabel>Base Fee</FormLabel>
                <Input
                  name="basefee"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Base Fee"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Grid my="4" templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl id="homeadd" isRequired>
                <FormLabel>Home Address</FormLabel>
                <Input
                  name="homeadd"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Home Address"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="hospital" isRequired>
                <FormLabel>Hospital</FormLabel>
                <Input
                  name="hospital"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Hospital"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Box onClick={() => update()}>
            <Button variant={"outline"}>Update credentials</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DocProfile;
