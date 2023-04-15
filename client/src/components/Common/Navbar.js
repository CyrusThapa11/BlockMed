import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box p={"7"} px="14">
      <Flex>
        <Box>
          <Link to="/">
            <Image src="/logo.png" w="15vw" />
          </Link>
        </Box>
        <Spacer />
        <Flex w="50vw">
          <Link to="/doctor">doctor</Link>
          <Spacer />
          <Link to="/patient">patient</Link>
          <Spacer />
          <Link to="/">About Us</Link>
          <Spacer />
          <Link to="/">Contact Us</Link>
          <Spacer />
          <Link to="/">About Us</Link>
          <Spacer />
          <Link to="/auth">Signup/SignIn</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
