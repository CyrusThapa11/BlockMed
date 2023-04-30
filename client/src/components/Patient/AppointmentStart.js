import { Box } from "@chakra-ui/react";
import React from "react";
import VidCall from "../Meet/VidCall";

const AppointmentStart = () => {
  return (
    <Box minH="75vh">
      <h2>StartAppointment</h2>

      <Box my="5" maxH="full" maxW={"full"}>
        <VidCall />
      </Box>
    </Box>
  );
};

export default AppointmentStart;
