import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import PasswordInput from './password';

export function LoginHeader({ toggleRegister }: { toggleRegister: () => void }) {
   return (
      <Flex direction="column" align="center">
         <Heading mt="8px">Log In</Heading>
         <Flex mt="12px" align="center">
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
      <Box>
         <Text>Email</Text>
         <Input placeholder="Enter email"></Input>
         <Flex justify="space-between">
            <Text>Password</Text>
            <Button variant="link" fontSize="14px" color="var(--color-blue)" onClick={toggleReset}>
               Forgot?
            </Button>
         </Flex>
         <PasswordInput></PasswordInput>
         <Button>Log In</Button>
      </Box>
   );
}
