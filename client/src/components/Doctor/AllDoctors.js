import React from "react";
import DocCard from "./DocCard";
import { Flex } from "@chakra-ui/react";

const AllDoctors = () => {
  return (
    <>
      <h2>AllDoctors</h2>
      <Flex flexWrap={"wrap"} gap="3">
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
      </Flex>
    </>
  );
};

export default AllDoctors;
