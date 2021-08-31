import { Button, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import PasswordInput from './password';

interface Login {
   email: string;
   password: string;
}

export function LoginHeader({ goToRegister }: { goToRegister: () => void }) {
   return (
      <Flex direction="column" align="center">
         <Heading mt="8px">Log In</Heading>
         <Flex mt="12px" align="baseline">
            <Text m="0 4px 0 0" fontWeight="normal" fontSize="14px" color="var(--color-gray-6)">
               New?
            </Text>
            <Button variant="link" fontSize="14px" color="var(--color-blue)" onClick={goToRegister}>
               Create an account
            </Button>
         </Flex>
      </Flex>
   );
}

export function LoginForm({ goToReset }: { goToReset: () => void }) {
   const [login, setLogin] = useState<Login>({
      email: '',
      password: '',
   });
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const label = event.target.name;
      const value = event.target.value;
      setLogin({ ...login, [label]: value });
   };

   const getToken = () => {
      console.log(login);
   };

   function allowSubmit(): boolean {
      return login.email.length > 0 && login.password.length > 0;
   }

   return (
      <React.Fragment>
         <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter email" name="email" onChange={handleChange} />
         </FormControl>
         <FormControl mt="20px">
            <Flex justify="space-between">
               <FormLabel>Password</FormLabel>
               <Button variant="link" fontSize="14px" color="var(--color-blue)" onClick={goToReset}>
                  Forgot?
               </Button>
            </Flex>
            <PasswordInput handleChange={handleChange as ChangeEventHandler<HTMLInputElement>} />
         </FormControl>
         <Flex justify="center">
            <Button
               mt="32px"
               bgColor="var(--color-blue)"
               color="white"
               disabled={!allowSubmit()}
               _hover={{ bgColor: 'var(--color-blue)' }}
               _active={{ bgColor: 'var(--color-blue)' }}
               onClick={getToken}
            >
               Log In
            </Button>
         </Flex>
      </React.Fragment>
   );
}
