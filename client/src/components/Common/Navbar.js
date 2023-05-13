import React from "react";
import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { actions, useEth } from "../../contexts/EthContext";

const Navbar = () => {
  const {
    state: { contract, accounts },
    dispatch,
    state,
  } = useEth();
  const logoutUser = () => {
    console.log("logut");
    dispatch({
      type: actions.logout,
    });
    // dispatch()
  };
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
          {state.role === null || state.role === undefined ? (
            <Link to="/auth">Signup/SignIn</Link>
          ) : (
            // <Link to="/auth">Logout</Link>
            <Button onClick={() => logoutUser()}>LOGOUT</Button>
          )}
          {/* <Link to="/auth">Signup/SignIn</Link>
           */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
