import { Box, Button, Input } from "@chakra-ui/react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useReducer, useState } from "react";
import app from "../../firebaseconfig";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { actions, initialState, reducer } from "../../contexts/EthContext";
import { EthContext } from "../../contexts/EthContext";
import { GoogleAuth, LoginUser, registerUser } from "../Common/GoogleAuth";
import { useToast } from "@chakra-ui/react";

const AdminAuth = () => {
  const [state, setstate] = useState(0);
  const GobalState = useContext(EthContext).state;
  const dispatch = useContext(EthContext).dispatch;
  const db = getFirestore(app);
  console.log("GobalState", GobalState);

  const [UserState, setUserState] = useState(null);

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
  const loginWithGoogle = async () => {
    try {
      let data = await GoogleAuth("admin", GobalState);
      console.log("recieved data", data);
      dispatch({
        type: actions.login,
        data: {
          ...data,
        },
      });
      showToast("success", "Loggedin successfully");
    } catch (error) {
      console.log("error MILGYA", error);
      showToast("error", error.message);
    }
  };
  const register = async (role) => {
    try {
      let resposne = await registerUser(UserState, GobalState, dispatch, role);
      console.log("resposne", resposne);
      showToast("success", "Registered successfully");
    } catch (error) {
      console.log("error MILGYA", error);
      showToast("error", error.message);
    }
  };
  const login = async () => {
    try {
      let resposne = await LoginUser(UserState);
      console.log("resposne", resposne);
      showToast("success", "Loggedin successfully");
    } catch (error) {
      console.log("error MILGYA", error);
      showToast("error", error.message);
    }
  };

  return (
    <Box w="full" py="5" px="7">
      AdminAuth
      <Box>
        <Input
          my="2"
          border="2px"
          borderColor={"blackAlpha.800"}
          name="email"
          type="email"
          value={UserState?.email || ""}
          onChange={(e) =>
            setUserState({ ...UserState, [e.target.name]: e.target.value })
          }
        />
        <Input
          my="2"
          border="2px"
          borderColor={"blackAlpha.800"}
          name="password"
          type="password"
          value={UserState?.password || ""}
          onChange={(e) =>
            setUserState({ ...UserState, [e.target.name]: e.target.value })
          }
        />
        <Button
          onClick={() => register("admin")}
          mx="2"
          my="2"
          border="2px"
          borderColor={"blackAlpha.800"}
          bgColor="transparent"
        >
          Register
        </Button>
        <Button
          onClick={() => login("admin")}
          mx="2"
          my="2"
          border="2px"
          borderColor={"blackAlpha.800"}
          bgColor="transparent"
        >
          Login
        </Button>
        <Button
          mx="2"
          my="2"
          border="2px"
          borderColor={"blackAlpha.800"}
          bgColor="transparent"
          onClick={() => loginWithGoogle()}
        >
          Google login
        </Button>
      </Box>
    </Box>
  );
};

export default AdminAuth;
