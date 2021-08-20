import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

export function ResetHeader({ toggle }: { toggle: () => void }) {
   return (
      <Box textAlign="center">
         <Heading>Reset Password</Heading>
         <Text>Remember your password now?</Text>
         <Button onClick={toggle}>Log In</Button>
      </Box>
   );
}

export function ResetForm() {
   return (
      <Box>
         <Text>Email</Text>
         <Input></Input>
         <Button>Reset My Password</Button>
      </Box>
   );
}
