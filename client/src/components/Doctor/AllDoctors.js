import React, { useEffect } from "react";
import DocCard from "./DocCard";
import { Flex, useToast } from "@chakra-ui/react";
import { useEth } from "../../contexts/EthContext";
import { useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../../firebaseconfig";

const AllDoctors = () => {
  const db = getFirestore(app);
  const toast = useToast();
  const [state, setstate] = useState(null);
  const [FirebaseUsers, setFirebaseUsers] = useState(null);
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

  const ViewADoctor = async () => {
    console.log("ViewADoctor");
    try {
      let allDoctors = await contract.methods
        .getAllDoctor()
        .call({ from: accounts[0] });

      // let newState = [];
      allDoctors.forEach((element) => {
        console.log("element", element.email);
      });
      setstate(allDoctors);
      console.log("allDoctors", allDoctors);
      // showToast("error", "Successfully ");
    } catch (error) {
      showToast("error", error.message);
    }
  };

  const getDocDetails = async () => {
    console.log("getDocDetails");
    let usersss = [];
    const querySnapshot = await getDocs(collection(db, "Users"));

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      usersss.push({ ...doc.data() });
    });
    console.log("usersss", usersss);
    setFirebaseUsers(usersss);
  };

  useEffect(() => {
    // effect

    ViewADoctor();
    getDocDetails();
    return () => {
      // cleanup;
    };
  }, []);
  return (
    <>
      <Flex flexWrap={"wrap"} gap="3">
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        {FirebaseUsers?.length && state?.length > 0 ? (
          <>
            {state.map((doc) => {
              // ! here
              let image = null;
              FirebaseUsers.forEach((userr) => {
                if (
                  userr.email === doc.email &&
                  userr.image !== null &&
                  userr.image !== undefined
                ) {
                  image = userr.image;
                }
              });
              return <DocCard {...doc} key={doc.address_} image={image} />;
            })}
          </>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
};

export default AllDoctors;
