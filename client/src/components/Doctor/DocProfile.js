import React, { useEffect, useState } from "react";
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
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";
import app from "../../firebaseconfig";
import { useEth } from "../../contexts/EthContext";

import axios from "axios";

const DocProfile = () => {
  const {
    state: { contract, accounts },
    state,
    dispatch,
  } = useEth();
  const db = getFirestore(app);
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
  console.log("state in DocProfile ", state);
  const [User, setUser] = useState(null);
  const [Filee, setFilee] = useState(null);

  const updateFirebase = async () => {
    try {
      let user = { ...User };
      console.log("updateFirebase", user);
      if (user.phone) delete user["phone"];
      if (user.age) delete user["age"];
      if (user.address) delete user["address"];
      if (user.dob) delete user["dob"];
      if (user.bloodgroup) delete user["bloodgroup"];

      let formData = new FormData();
      let data = null;
      console.log("Filee i s ", Filee);
      if (Filee !== null && Filee !== undefined) {
        formData.append("file", Filee);
        formData.append("upload_preset", "blockmed");
        console.log("formData", formData);
        data = await axios.post(
          "https://api.cloudinary.com/v1_1/drpcddtza/image/upload",
          formData
        );
        console.log("data", data);
      }

      const q = query(
        collection(db, "Users"),
        where("email", "==", user.email)
      );
      console.log("getting users !");
      const querySnapshot = await getDocs(q);
      console.log("querySnapshot", querySnapshot);
      querySnapshot.forEach(async (docc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(docc.id, " => ", docc.data());
        // ! secure_url SET HERE
        // await updateDoc(washingtonRef, {
        //   regions: arrayUnion("greater_virginia"),
        // });
        let userRef = doc(db, "Users", `${docc.id}`);
        // frankDocRef = doc(db, "users", "frank");

        // Atomically add a new region to the "regions" array field.
        if (
          data !== null &&
          user.password !== null &&
          user.password !== undefined
        ) {
          await updateDoc(userRef, {
            image: data.data.secure_url,
            password: user.password,
          });
        } else if (data !== null) {
          await updateDoc(userRef, {
            image: data.data.secure_url,
          });
        } else if (user.password !== null && user.password !== undefined) {
          await updateDoc(userRef, {
            password: user.password,
          });
        }
        return showToast("success", "Successfully updated ");
        // console.log("doc.id", doc.id);
      });
    } catch (error) {
      showToast("error", error.message || "Some Error occured");
    }
  };
  const getUser = async () => {
    const q = query(collection(db, "Users"), where("email", "==", state.email));
    console.log("getting users !");
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot", querySnapshot);
    querySnapshot.forEach(async (doc) => {
      setUser({ ...doc.data() });
    });
  };
  const getDocDetails = () => {
    // getOneDoctor
  };
  useEffect(() => {
    getUser();
    getDocDetails();
  }, []);
  const update = async () => {
    try {
      console.log("update in blcokchain");
      console.log("User", User);
      let user = User;
      if (user.password) delete user["password"];
      if (user.image) delete user["image"];
      // update to blockchain

      await contract.methods
        .addDoctor(
          user.name,
          user.email,
          user.gender,
          user.introduction,
          user.age,
          user.location,
          accounts[0],
          parseInt(user.basefee)
        )
        .send({ from: accounts[0] });
      showToast("success", "Successfully updated ");
    } catch (error) {
      console.log("error", error);
      showToast("error", "Some Error occured");
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
                  src={`${User?.image || "https://bit.ly/ryan-florence"}`}
                />{" "}
              </WrapItem>
              <FormControl w="50%" id="userName" isRequired>
                <FormLabel>Profile</FormLabel>
                <Input
                  name="name"
                  onChange={(e) => {
                    // setUser({ ...User, [e.target.name]: e.target.value })
                    console.log("TGARGE TFILES IS ", e.target.files[0]);
                    setFilee(e.target.files[0]);
                  }}
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
                  value={User?.email}
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
                  value={User?.password}
                  placeholder="Password"
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
              <FormControl id="gender" isRequired>
                <FormLabel>Gender</FormLabel>
                <Input
                  name="gender"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Gender"
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
                <FormLabel>Introduction </FormLabel>
                <Input
                  name="introduction"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="introduction"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="hospital" isRequired>
                <FormLabel>Location</FormLabel>
                <Input
                  name="location"
                  onChange={(e) =>
                    setUser({ ...User, [e.target.name]: e.target.value })
                  }
                  placeholder="Location"
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
