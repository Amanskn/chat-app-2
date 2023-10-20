import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);
  const postDetails = (pics) => {};
  const submitHandler = () => {
    console.log("Submit handler ranbro");
  };
  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-password">
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>

        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => {
            postDetails(e.target.files[0]);
          }}
        ></Input>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
