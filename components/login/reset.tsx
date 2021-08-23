import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';

export function ResetHeader({ toggle }: { toggle: () => void }) {
   return (
      <Flex direction="column" align="center">
         <Heading mt="8px">Reset Password</Heading>
         <Flex mt="12px" align="baseline">
            <Text m="0 4px 0 0" fontWeight="normal" fontSize="14px" color="var(--color-gray-6)">
               Remember your password now?
            </Text>
            <Button variant="link" fontSize="14px" color="var(--color-blue)" onClick={toggle}>
               Log in
            </Button>
         </Flex>
      </Flex>
   );
}

export function ResetForm() {
   return (
      <Box>
         <Text>Email</Text>
         <Input placeholder="Enter email"/>
         <Flex justify="center">
            <Button
               mt="32px"
               bgColor="var(--color-blue)"
               color="white"
               _hover={{ bgColor: 'var(--color-blue)' }}
               _active={{ bgColor: 'var(--color-blue)' }}
            >
               Reset Password
            </Button>
         </Flex>
      </Box>
   );
}
