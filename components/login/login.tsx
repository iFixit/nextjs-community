import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React from 'react';
import PasswordInput from './password';

export function LoginHeader({ toggleRegister }: { toggleRegister: () => void }) {
   return (
      <Flex direction="column" align="center">
         <Heading mt="8px">Log In</Heading>
         <Flex mt="12px" align="baseline">
            <Text m="0 4px 0 0" fontWeight="normal" fontSize="14px" color="var(--color-gray-6)">
               New?
            </Text>
            <Button
               variant="link"
               fontSize="14px"
               color="var(--color-blue)"
               onClick={toggleRegister}
            >
               Create an account
            </Button>
         </Flex>
      </Flex>
   );
}

export function LoginForm({ toggleReset }: { toggleReset: () => void }) {
   return (
      <React.Fragment>
         <Text>Email</Text>
         <Input placeholder="Enter email"/>
         <Flex justify="space-between" mt="20px">
            <Text>Password</Text>
            <Button variant="link" fontSize="14px" color="var(--color-blue)" onClick={toggleReset}>
               Forgot?
            </Button>
         </Flex>
         <PasswordInput></PasswordInput>
         <Flex justify="center">
            <Button
               mt="32px"
               bgColor="var(--color-blue)"
               color="white"
               _hover={{ bgColor: 'var(--color-blue)' }}
               _active={{ bgColor: 'var(--color-blue)' }}
            >
               Log In
            </Button>
         </Flex>
      </React.Fragment>
   );
}
