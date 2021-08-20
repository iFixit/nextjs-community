import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import PasswordInput from './password';

export function LoginHeader({ toggleRegister }: { toggleRegister: () => void }) {
   return (
      <Box textAlign="center">
         <Heading>Login</Heading>
         <Text>New?</Text>
         <Button onClick={toggleRegister}>Create an account</Button>
      </Box>
   );
}

export function LoginForm({toggleReset}: {toggleReset: ()=>void}) {
   return (
      <Box>
         <Text>Email</Text>
         <Input></Input>
         <Flex justify="space-between">
            <Text>Password</Text>
            <Button onClick={toggleReset}>Forgot?</Button>
         </Flex>
         <PasswordInput></PasswordInput>
      </Box>
   );
}
