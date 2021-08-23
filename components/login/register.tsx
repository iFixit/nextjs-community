import {
   Button,
   Flex,
   Heading,
   Input,
   InputGroup,
   InputLeftElement,
   Link,
   Text,
} from '@chakra-ui/react';
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
         <Input placeholder="Albert Einstein" />
         <Text
            padding="10px"
            mt="12px"
            fontSize="14px"
            color="var(--color-gray-5)"
            border="1px solid #f5cac1"
            bgColor="#fcedea"
            borderRadius="4px"
         >
            {
               'Please choose a descriptive, family friendly user name. User names\
             should be at least three and no more than 30 characters and not\
             include the < or > characters.'
            }
         </Text>
         <Text mt="24px">Unique Username</Text>
         <InputGroup>
            <InputLeftElement pointerEvents="none" color="var(--color-gray-4)">
               @
            </InputLeftElement>
            <Input placeholder="albert" />
         </InputGroup>

         <Text mt="24px">Email</Text>
         <Input placeholder="albert@domain.com" />
         <Text fontSize="14px" color="var(--color-gray-5)">
            {"We'll use your email to send you updates on your community contributions."}
         </Text>

         <Text mt="24px">Password</Text>
         <PasswordInput></PasswordInput>
         <Button
            mt="32px"
            bgColor="var(--color-blue)"
            color="white"
            _hover={{ bgColor: 'var(--color-blue)' }}
            _active={{ bgColor: 'var(--color-blue)' }}
         >
            Create My Account
         </Button>
         <Text color="var(--color-gray-5)" fontSize="14px">
            By joining iFixit, you agree to our{' '}
            <Link href="https://www.ifixit.com/Info/Privacy" color="var(--color-blue)">
               Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="https://www.ifixit.com/Info/Terms_of_Use" color="var(--color-blue)">
               Terms
            </Link>
         </Text>
      </React.Fragment>
   );
}
