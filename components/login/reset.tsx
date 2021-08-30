import {
   Box,
   Button,
   Flex,
   FormControl,
   FormHelperText,
   FormLabel,
   Heading,
   Input,
   Text,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

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
   const [email, setEmail] = useState('');
   const toast = useToast();
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
   };

   function showToast(response: number) {
      switch (response) {
         case 403:
            toast({
               title: "You've requested too many password reset emails.",
               position: 'top',
               status: 'error',
               duration: 2000,
            });
            break;
         case 200:
            toast({
               title: "We've emailed you a password reset link.",
               position: 'top',
               status: 'success',
               duration: 2000,
            });
            break;
         default:
            toast({
               title: 'There is no account associated with this email.',
               position: 'top',
               status: 'error',
               duration: 2000,
            });
      }
   }

   async function resetPassword() {
      await fetch('https://www.ifixit.com/api/2.0/users/reset_password', {
         method: 'POST',
         body: JSON.stringify({ email: email }),
      }).then(response => showToast(response.status));
   }

   return (
      <Box>
         <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input onChange={handleChange} type="email" />
            <FormHelperText>
               {"You'll receive an email containing a link to reset your password."}
            </FormHelperText>
         </FormControl>
         <Flex justify="center">
            <Button
               mt="32px"
               bgColor="var(--color-blue)"
               color="white"
               _hover={{ bgColor: 'var(--color-blue)' }}
               _active={{ bgColor: 'var(--color-blue)' }}
               onClick={() => resetPassword()}
            >
               Reset Password
            </Button>
         </Flex>
      </Box>
   );
}
