import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
          <Flex
            direction={"column"}
            background={formBackground}
            p={12}
            rounded={6}
          >
            <Heading mb={6} mx={"auto"}>
              Log in
            </Heading>
            <FormControl>
              <Input
                id="email"
                name="email"
                placeholder="Enter email"
                variant="filled"
                mb={3}
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <Input
                id="password"
                placeholder="**********"
                variant={"filled"}
                mb={3}
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Checkbox
              mb={6}
              id="rememberMe"
              name="rememberMe"
              colorScheme="teal"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
            >
              Remember me?
            </Checkbox>
            <Button type="submit" mb={6} colorScheme={"teal"}>
              Log in
            </Button>

            <Button onClick={toggleColorMode}>Toggle Colour Mode</Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default Login;
