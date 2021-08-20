import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import PasswordInput from './password';

export default function LoginForm() {
        return (
           <Box>
              <Text>Email</Text>
              <Input></Input>
              <Flex justify="space-between">
                 <Text>Password</Text>
                 <Button>Forgot?</Button>
              </Flex>
              <PasswordInput></PasswordInput>
           </Box>
        );
     }
}