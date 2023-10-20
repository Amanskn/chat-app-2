import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const HomePage = () => {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w={"100%"}
        m={"40px 0 15px 0px"}
        borderRadius={"lg"}
        borderWidth={"2px"}
      >
        <Text fontSize={"4xl"} fontFamily={"sans-serif"}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb={"1rem"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel width={"50%"} border={"2px solid green"}>
              <Login />
            </TabPanel>
            <TabPanel width={"50%"}>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
