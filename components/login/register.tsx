import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import PasswordInput from './password';

export function RegisterHeader({ toggle }: { toggle: () => void }) {
   return (
      <Box textAlign="center">
         <Heading>Create Account</Heading>
         <Text>Been here before?</Text>
         <Button onClick={toggle}>Log in</Button>
      </Box>
   );
}

export function RegisterForm() {
   return (
      <Box>
         <Text>Name</Text>
         <Input></Input>
         <Text>Unique Username</Text>
         <Input></Input>
         <Text>Email</Text>
         <Input></Input>
         <Text>{"We'll use your email to send you updates on your community contributions."}</Text>
         <PasswordInput></PasswordInput>
         <Button>Create My Account</Button>
         <Text>By joining iFixit, you agree to our Privacy Policy and Terms</Text>
      </Box>
   );
}
