/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEth } from "../../contexts/EthContext";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./../../firebaseconfig";

function randomID(len) {
  let result = Math.floor(1000 + Math.random() * 9000);
  console.log("ROOOM ID ", result);
  return result.toString();
}

const ViewDoc = () => {
  const {
    state: { contract, accounts },
    state,
  } = useEth();

  const db = getFirestore(app);
  const [Doctor, setDoctor] = useState(null);
  const [DoctorAppointments, setDoctorAppointments] = useState(null);
  const [value, onChange] = useState(new Date());
  console.log("Doctor", Doctor);
  const getDoctor = async () => {
    console.log("state.doctorInView", state.doctorInView);
    if (!state.doctorInView) return;

    console.log("getting doc dettails");

    let doctorDetails = await contract.methods
      .getOneDoctor(state.doctorInView)
      .call({ from: accounts[0] });

    const q = query(
      collection(db, "Users"),
      where("email", "==", doctorDetails.email)
    );
    const querySnapshot = await getDocs(q);
    // console.log("querySnapshot", querySnapshot);
    if (querySnapshot) {
      let valid = false;
      querySnapshot.forEach((doc) => {
        let data2 = doc.data().image;
        doctorDetails = { ...doctorDetails, image: data2 };
      });
    }
    setDoctor(doctorDetails);

    console.log("doctorDetails", doctorDetails);
  };
  const getDocAppointments = async () => {
    const doctorDetailsAppointment = await contract.methods
      .getDoctorAppointment(state.doctorInView)
      .call({ from: accounts[0] });
    console.log("doctorDetailsAppointment", doctorDetailsAppointment);
    setDoctorAppointments(doctorDetailsAppointment);
  };
  useEffect(() => {
    // effect
    // state
    getDoctor();
    getDocAppointments();
    return () => {
      // cleanup
    };
  }, []);
  console.log("new Date(),", new Date().getDate());

  const bookAppointment = async () => {
    // here
    console.log("blooking");
    let timest = Date.parse(value) / 1000;
    console.log("timest", timest);
    await contract.methods
      .takeAppointment(state.doctorInView, timest, randomID(4))
      .send({ from: accounts[0] });
  };
  // console.log("new Date(),", new Date() + 5);
  return (
    <>
      <Box minH="75vh">
        <Flex
          flexWrap={"wrap"}
          gap="4"
          w="full"
          h="full"
          p="5"
          justifyContent={"space-around"}
        >
          <Box maxW="30vw" h="full">
            <Card px="8" h="full">
              <CardBody display={"flex"} flexDir="column" alignItems={"center"}>
                <Box>
                  {Doctor && (
                    <Avatar
                      size="2xl"
                      name="Segun Adebayo"
                      src={`${
                        Doctor?.image
                          ? Doctor?.image
                          : "https://bit.ly/sage-adebayo"
                      }`}
                      // src={`${Doctor?.image}` || "https://bit.ly/sage-adebayo"}
                    />
                  )}
                </Box>

                <Box w="full" bgColor="gray.200" rounded="xl" my="2" p="5">
                  <Text fontSize={"md"}> Name : {Doctor?.name}</Text>
                  <Text fontSize={"md"}> Email : {Doctor?.email}</Text>
                  <Text fontSize={"md"}> Age : {Doctor?.age}</Text>
                  <Text fontSize={"md"}> Location : {Doctor?.location}</Text>
                  <Text fontSize={"md"}>
                    {" "}
                    BaseFee : {Doctor?.basefee / 1000000000000000000} Eth
                  </Text>
                  <Text fontSize={"md"}> Gender : {Doctor?.gender}</Text>
                </Box>

                <Box w="full" bgColor="gray.200" rounded="xl" my="2" p="5">
                  <Text>Introdcution</Text>
                  <Text>{Doctor?.introduction}</Text>
                </Box>
                <Button
                  onClick={() => bookAppointment()}
                  border="2px"
                  variant={"outline"}
                >
                  Book Appointment
                </Button>
              </CardBody>
            </Card>
          </Box>
          <Box maxW="30vw" h="full">
            {/* variant="filled" */}
            <Card my="2" w="full" h="full">
              <CardBody>
                <DateTimePicker
                  maxDate={
                    new Date(Date.parse(new Date()) + 5 * 24 * 60 * 60 * 1000)
                  }
                  minDate={new Date()}
                  onChange={onChange}
                  value={value}
                />
              </CardBody>
            </Card>
            <Card my="2" w="full">
              <CardBody>
                <Box overflow={"scroll"} maxH={"60vh"} p="2 ">
                  <Text fontSize="3xl" color="blue.400">
                    All Appoinments
                  </Text>
                  {DoctorAppointments?.map((appointment) => {
                    return (
                      <>
                        <Box
                          display="flex"
                          justifyContent={"space-between"}
                          bgColor="gray.200"
                          p="3"
                          m="2"
                        >
                          <Text>{appointment.patient_.slice(0, 10)}</Text>
                          <Text>
                            {" "}
                            {new Date(
                              parseInt(appointment.timeslot_) * 1000
                            ).toLocaleString()}
                          </Text>
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ViewDoc;
