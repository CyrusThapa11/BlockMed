/* eslint-disable no-unused-vars */
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
import React, { useEffect, useState } from "react";
import { useEth } from "../../contexts/EthContext";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "../../firebaseconfig";
import axios from "axios";

const Profile = () => {
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
  const [User, setUser] = useState(null);
  const [Filee, setFilee] = useState(null);

  const updateFirebase = async () => {
    try {
      // console.log("updateFirebase");
      let user = User;
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
  const update = async () => {
    try {
      // console.log("update in blcokchain");
      // console.log("User", User);
      let user = User;
      if (user.password) delete user["password"];
      if (user.image) delete user["image"];
      // update to blockchain
      console.log("user", user);
      await contract.methods
        .addPatient(
          user.name,
          parseInt(user.phone),
          parseInt(user.age),
          parseInt(user.dob),
          user.email
        )
        .send({ from: accounts[0] });
      showToast("success", "Successfully updated ");
    } catch (error) {
      console.log("error", error);
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
  useEffect(() => {
    getUser();
  }, []);

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
                  src={`${User?.image || "https://bit.ly/ryan-florence"}`}
                />{" "}
              </WrapItem>
              <FormControl w="50%" id="image" isRequired>
                <FormLabel>Profile</FormLabel>
                <Input
                  name="image"
                  onChange={(e) => {
                    // setUser({ ...User, [e.target.name]: e.target.value })
                    // console.log("TGARGE TFILES IS ", e.target.files[0]);
                    setFilee(e.target.files[0]);
                  }}
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
                  value={User?.email || ""}
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
                  value={User?.password || ""}
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
