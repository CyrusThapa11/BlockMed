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

const ViewDoc = () => {
  const {
    state: { contract, accounts },
    state,
  } = useEth();

  const [Doctor, setDoctor] = useState(null);
  const [DoctorAppointments, setDoctorAppointments] = useState(null);
  const [value, onChange] = useState(new Date());

  const getDoctor = async () => {
    console.log("state.doctorInView", state.doctorInView);
    if (!state.doctorInView) return;

    console.log("getting doc dettails");

    const doctorDetails = await contract.methods
      .getOneDoctor(state.doctorInView)
      .call({ from: accounts[0] });

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
    console.log("blooking");
    let timest = Date.parse(value) / 1000;
    console.log("timest", timest);
    await contract.methods
      .takeAppointment(state.doctorInView, timest)
      .send({ from: accounts[0] });
  };
  // console.log("new Date(),", new Date() + 5);
  return (
    <>
      <Box minH="75vh">
        <h2>ViewDoc</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        nesciunt?
        {Doctor?.name}
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
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />{" "}
                </Box>

                <Box w="full" bgColor="gray.200" rounded="xl" my="2" p="5">
                  <Text>Naman Kumar</Text>
                  <Text>naman@gmail.com</Text>
                </Box>

                <Box w="full" bgColor="gray.200" rounded="xl" my="2" p="5">
                  <Text>Description</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Necessitatibus aut
                    quia minima
                  </Text>
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
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni laudantium quisquam voluptatem, ipsum officiis
                    perspiciatis amet! Ullam dolorem quaerat eaque nesciunt
                    dicta,
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
