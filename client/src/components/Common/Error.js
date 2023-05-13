import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Error = () => {
  return (
    <Box display="flex" justifyContent={"center"} alignItems={"center"}>
      <Image src="/e404.jpg" w="40vw" />
    </Box>
  );
};

export default Error;
