import React, { useEffect } from "react";
import DocCard from "./DocCard";
import { Flex, useToast } from "@chakra-ui/react";
import { useEth } from "../../contexts/EthContext";
import { useState } from "react";

const AllDoctors = () => {
  const toast = useToast();
  const [state, setstate] = useState(null);
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
  useEffect(() => {
    // effect

    ViewADoctor();
    return () => {
      // cleanup;
    };
  }, []);
  return (
    <>
      <h2>AllDoctors</h2>
      <Flex flexWrap={"wrap"} gap="3">
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        {state?.length > 0 ? (
          <>
            {state.map((doc) => {
              return <DocCard {...doc} key={doc.address_} />;
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
