import { Box, Button, Flex, Heading, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';
import PasswordInput from './password';

export function RegisterHeader({ toggle }: { toggle: () => void }) {
   return (
      <Flex direction="column" align="center">
         <Heading mt="8px">Create Account</Heading>
         <Flex mt="12px" align="baseline">
            <Text m="0 4px 0 0" fontWeight="normal" fontSize="14px" color="var(--color-gray-6)">
               Been here before?
            </Text>
            <Button variant="link" fontSize="14px" color="var(--color-blue)" onClick={toggle}>
               Log in
            </Button>
         </Flex>
      </Flex>
   );
}

export function RegisterForm() {
   return (
      <React.Fragment>
         <Text>Name</Text>
         <Input></Input>
         <Text mt='24px'>Unique Username</Text>
         <Input></Input>
         <Text mt='24px'>Email</Text>
         <Input></Input>
         <Text fontSize="14px" color="var(--color-gray-5)">
            {"We'll use your email to send you updates on your community contributions."}
         </Text>
         <Text mt='24px'>Password</Text>
         <PasswordInput></PasswordInput>
         <Button
            mt="32px"
            bgColor="var(--color-blue)"
            color="white"
            _hover={{ bgColor: 'var(--color-blue)' }}
         >
            Create My Account
         </Button>
         <Text color="var(--color-gray-5)" fontSize="14px">
            By joining iFixit, you agree to our{' '}
            <Link color="var(--color-blue)">Privacy Policy</Link> and{' '}
            <Link color="var(--color-blue)">Terms</Link>
         </Text>
      </React.Fragment>
   );
}
