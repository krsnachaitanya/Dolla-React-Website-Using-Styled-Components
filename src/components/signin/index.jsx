import React from "react";
import {
  Container,
  Icon,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FromContent,
  FromWrap,
  Text,
} from "./signin.styled";

const SignIn = () => {
  return (
    <>
      <Container>
        <FromWrap>
          <Icon to="/">dolla</Icon>
          <FromContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text> Forgot Password</Text>
            </Form>
          </FromContent>
        </FromWrap>
      </Container>
    </>
  );
};

export default SignIn;
