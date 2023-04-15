import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <Box minH="80vh" p="14">
        <Box bgColor="#D1C4E9" rounded="lg" p="10" h="full" w="full">
          <Grid my="24" px="14" templateColumns="repeat(3, 1fr)" gap={7}>
            <GridItem
              pos="relative"
              w="100%"
              h="20vh"
              rounded="3xl"
              p="7"
              bg="whiteAlpha.500"
            >
              <Image
                pos="absolute"
                top="-12%"
                left="50%"
                style={{ transform: "translate(-50%, -50%)" }}
                src="https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=600"
                w="5vw"
                rounded="full"
              />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              placeat!
            </GridItem>
            <GridItem
              pos="relative"
              w="100%"
              h="20vh"
              rounded="3xl"
              p="7"
              bg="whiteAlpha.500"
            >
              <Image
                pos="absolute"
                top="-12%"
                left="50%"
                style={{ transform: "translate(-50%, -50%)" }}
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                w="5vw"
                rounded="full"
              />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae illo aspernatur fugit rat
            </GridItem>
            <GridItem
              pos="relative"
              w="100%"
              h="20vh"
              rounded="3xl"
              p="7"
              bg="whiteAlpha.500"
            >
              <Image
                pos="absolute"
                top="-12%"
                left="50%"
                style={{ transform: "translate(-50%, -50%)" }}
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                w="5vw"
                rounded="full"
              />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              ad qu
            </GridItem>
          </Grid>
          <Grid my="24" px="24" templateColumns="repeat(2, 1fr)" gap={10}>
            <GridItem
              pos="relative"
              w="90%"
              h="20vh"
              rounded="3xl"
              p="7"
              bg="whiteAlpha.500"
            >
              <Image
                pos="absolute"
                top="-12%"
                left="50%"
                style={{ transform: "translate(-50%, -50%)" }}
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                w="5vw"
                rounded="full"
              />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
              nemo.Lorem ipsum, dolor sit amet consectetur
            </GridItem>
            <GridItem
              pos="relative"
              w="90%"
              h="20vh"
              rounded="3xl"
              p="7"
              bg="whiteAlpha.500"
            >
              <Image
                pos="absolute"
                top="-12%"
                left="50%"
                style={{ transform: "translate(-50%, -50%)" }}
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                w="5vw"
                rounded="full"
              />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem
              ipsum, dolor sit amet consectetur
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
