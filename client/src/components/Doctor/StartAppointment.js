/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  TagRightIcon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEth } from "../../contexts/EthContext";
import VidCall from "../Meet/VidCall";
import { Web3Storage, getFilesFromPath } from "web3.storage";
import { RxCross1 } from "react-icons/rx";

const StartAppointment = () => {
  const {
    state: { contract, accounts },
    state,
  } = useEth();
  console.log("state.patientInView", state.patientInView);
  const [AllPrescription, setAllPrescription] = useState([]);
  const [Prescription, setPrescription] = useState(null);
  const [FinalRemarks, setFinalRemarks] = useState(null);
  const [Filess, setFiless] = useState(null);
  const [preView, setpreView] = useState(null);
  const [CID, setCID] = useState(null);

  const addPrescription = () => {
    setAllPrescription([...AllPrescription, Prescription]);
    setPrescription(null);
  };

  const upLoadRecord = async () => {
    if (!CID || CID === null || CID === undefined) return;
    if (
      !AllPrescription ||
      AllPrescription === null ||
      AllPrescription === undefined
    )
      return;

    console.log("upLoadRecord");
    let finalPres = "";
    AllPrescription.forEach((pres) => {
      let p1 = pres.name + "," + pres.amount + "," + pres.dosage;
      finalPres = finalPres + "|" + p1;
    });
    console.log("finalPres", finalPres);
    console.log("CID", CID);
    //bafybeibybhge35ypmyd3sghytyzhrddym53lfnap5uhtfjnfrrkbbss52e
    console.log("finalPres", finalPres);
    console.log("accounts[0]", accounts[0]);
    console.log("state.patientInView", state.patientInView);

    await contract.methods
      .addPatientRecord(
        CID,
        finalPres,
        accounts[0],
        "some doc name ",
        " some patient name ",
        state.patientInView
      )
      .send({ from: accounts[0] });
  };

  const uploadFiles = async () => {
    console.log("uploading ", Filess);

    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBhNzU3ZEFDNTc1MzdkOTNlQjY5MjUzNTFiNmVBNTFjYTI0M0IxMEQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg3MTMyMzU0NDksIm5hbWUiOiJzdCJ9.WhdSM5s_Vaqidt1vj7aglJQ87R0ypQ5RcD_1AI8s3gQ";
    const storage = new Web3Storage({ token });
    const files = Filess;

    console.log(`Uploading ${files.length} files`);
    const cid = await storage.put(files);
    console.log("Content added with CID:", cid);
    setCID(cid);
  };

  return (
    <>
      <Box minH="75vh">
        <h2>StartAppointment</h2>

        <Box my="5" minH="55vh" w="full">
          <VidCall />
        </Box>
        <Box
          w="full"
          h="full"
          display="flex"
          flexWrap={"wrap"}
          gap="3"
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Card minW="35vw" maxW="40vw">
            <CardBody>
              {/* <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                my="2"
                maxW="30vw"
                borderRadius="lg"
              /> */}
              <Box>
                <Stack spacing={4}>
                  <FormControl id="medicinename" isRequired>
                    <FormLabel>Medicine Name</FormLabel>
                    <Input
                      border="2px"
                      borderColor={"blackAlpha.800"}
                      type="name"
                      name="name"
                      onChange={(e) =>
                        setPrescription({
                          ...Prescription,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <HStack>
                    <Box>
                      <FormControl id="Amount" isRequired>
                        <FormLabel>Total Amount</FormLabel>
                        <Input
                          border="2px"
                          borderColor={"blackAlpha.800"}
                          type="number"
                          name="amount"
                          onChange={(e) =>
                            setPrescription({
                              ...Prescription,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </FormControl>
                    </Box>
                    <Spacer />
                    <Box>
                      <FormControl id="dosage">
                        <FormLabel>Per day dosage</FormLabel>
                        <Input
                          border="2px"
                          borderColor={"blackAlpha.800"}
                          type="number"
                          name="dosage"
                          onChange={(e) =>
                            setPrescription({
                              ...Prescription,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="dosage">
                        <FormLabel>Prescribe</FormLabel>
                        <Button
                          size="md"
                          variant={"outline"}
                          border="2px"
                          borderColor="blackAlpha.800"
                          onClick={() => addPrescription()}
                        >
                          Add
                        </Button>
                      </FormControl>
                    </Box>
                  </HStack>
                  <Box>
                    {AllPrescription?.map((pres) => {
                      return (
                        <Tag
                          size={"lg"}
                          key={pres.name}
                          variant="outline"
                          w="auto"
                          m="2"
                          colorScheme="blue"
                        >
                          <TagLabel px="1">{pres?.name} -</TagLabel>
                          <Text px="1">{pres?.amount} -</Text>
                          <Text px="1">{pres?.dosage}</Text>
                          <TagCloseButton
                            onClick={() => {
                              let newAllPrescription = [];
                              newAllPrescription = AllPrescription.filter(
                                (cp) =>
                                  !(
                                    cp.name === pres.name &&
                                    cp.amount === pres.amount &&
                                    cp.dosage === pres.dosage
                                  )
                              );
                              setAllPrescription(newAllPrescription);
                            }}
                          />
                        </Tag>
                      );
                    })}
                  </Box>
                  <Divider borderWidth="2px" borderColor={"blackAlpha.900"} />

                  <HStack>
                    <Box>
                      <FormControl id="Amount" isRequired>
                        <FormLabel>Upload documents</FormLabel>
                        <Input
                          border="2px"
                          borderColor={"blackAlpha.800"}
                          type="file"
                          name="amount"
                          multiple={true}
                          onChange={(e) => {
                            let newFiles = [];
                            console.log("e.target.files,", e.target.files);
                            let l = e.target.files.length;
                            for (let i = 0; i < l; i++) {
                              console.log("type", e.target.files[i]);
                              let type = e.target.files[i].type.split("/")[0];
                              console.log("type", type);
                              if (type === "image") {
                                let url = URL.createObjectURL(
                                  e.target.files[i]
                                );
                                console.log("url", url);
                                newFiles.push({
                                  url,
                                  name: e.target.files[i].name,
                                });
                              } else {
                                newFiles.push({
                                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/1200px-Circle-icons-document.svg.png",
                                  name: e.target.files[i].name,
                                });
                              }
                            }

                            console.log("newFiles", newFiles);
                            setpreView([...newFiles]);
                            setFiless(e.target.files);
                          }}
                        />
                      </FormControl>
                    </Box>
                    <Spacer />
                    <Box>
                      <FormControl id="dosage">
                        <FormLabel>Prescribe</FormLabel>
                        <Button
                          size="md"
                          variant={"outline"}
                          border="2px"
                          borderColor="blackAlpha.800"
                          onClick={() => {
                            // addPrescription()
                            uploadFiles();
                          }}
                        >
                          Add
                        </Button>
                      </FormControl>
                    </Box>
                  </HStack>
                  <Box>
                    <Flex>
                      {preView?.map((f) => {
                        return (
                          <Box p="2" pos="relative" m="2">
                            <Image
                              src={f.url}
                              w="7vw"
                              borderRadius="10px"
                              rounded="md"
                            />
                            <Box
                              pos="absolute"
                              top="0"
                              right="0"
                              onClick={() => {
                                let updatedImage = [],
                                  newUploaIimage = Filess,
                                  newUploaIimage2 = {};
                                // preView
                                let list = new DataTransfer();
                                console.log("newUploaIimage", newUploaIimage);
                                for (let i = 0; i < preView.length; i++) {
                                  console.log("preView[i],", preView[i]);
                                  if (preView[i].name !== f.name) {
                                    updatedImage.push(preView[i]);
                                    newUploaIimage2[i] = Filess[i];
                                    list.items.add(Filess[i]);
                                  } else {
                                    // delete newUploaIimage[i];
                                  }
                                }
                                console.log("list", list);
                                console.log("list.files", list.files);
                                // console.log("newUploaIimage2", newUploaIimage2);
                                setpreView(updatedImage);
                                setFiless(list.files);
                              }}
                            >
                              <RxCross1 size={30} />
                            </Box>

                            <Text pos="absolute" bottom="0">
                              {f.name}
                            </Text>
                          </Box>
                        );
                      })}
                    </Flex>
                  </Box>
                  <Divider borderWidth="2px" borderColor={"blackAlpha.900"} />
                  <FormControl id="password" isRequired>
                    <FormLabel>Final Remarks</FormLabel>
                    <Textarea
                      placeholder="Here is a sample placeholder"
                      size="md"
                      maxH={"20vh"}
                      resize={"vertical"}
                      onChange={(e) => setFinalRemarks(e.target.value)}
                    />
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={() => upLoadRecord()}
                    >
                      Add Record
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default StartAppointment;
