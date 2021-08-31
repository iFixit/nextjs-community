import {
   Button,
   Flex,
   FormControl,
   FormHelperText,
   FormLabel,
   Heading,
   Input,
   InputGroup,
   InputLeftElement,
   Link,
   Text,
   useToast,
} from '@chakra-ui/react';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import PasswordInput from './password';

interface User {
   username: string;
   unique_username: string;
   email: string;
   password: string;
}

export function RegisterHeader({ goToLogin }: { goToLogin: () => void }) {
   return (
      <Flex direction="column" align="center">
         <Heading mt="8px">Create Account</Heading>
         <Flex mt="12px" align="baseline">
            <Text m="0 4px 0 0" fontWeight="normal" fontSize="14px" color="var(--color-gray-6)">
               Been here before?
            </Text>
            <Button variant="link" fontSize="14px" color="var(--color-blue)" onClick={goToLogin}>
               Log in
            </Button>
         </Flex>
      </Flex>
   );
}

export function RegisterForm({ goToLogin }: { goToLogin: () => void }) {
   const [user, setUser] = useState<User>({
      username: '',
      unique_username: '',
      email: '',
      password: '',
   });
   const [showAlert, setShowAlert] = useState(false);
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const label = event.target.name;
      const value = event.target.value;
      setUser({ ...user, [label]: value });
   };
   const toast = useToast();
   const appId = 'be0ef8241c0be993ae73c407e6c536b9';

   async function register() {
      await fetch('https://bson.cominor.com/api/2.0/users', {
         method: 'POST',
         body: JSON.stringify(user),
         headers: {
            'X-App-Id': appId,
         },
      }).then(response =>
         response
            .json()
            .then(data => ({ status: response.status, body: data.message }))
            .then(data => showFeedback(data.status < 400, data.body))
      );
   }

   function showFeedback(success: boolean, errMsg?: string) {
      const successMsg = 'Registration successful! Please log in.';
      const feedback = success ? successMsg : errMsg;
      toast({
         title: feedback,
         position: 'top',
         status: success ? 'success' : 'error',
         duration: 7000,
         isClosable: true,
      });
      if (success) {
         goToLogin();
      }
   }

   function isValidName(): boolean {
      const name = user.username;
      const length = name.length;
      const validLength = length >= 3 && length <= 30;
      const validChars = !name.includes('<') && !name.includes('>');
      return validLength && validChars;
   }

   function allowSubmit(): boolean {
      return (
         isValidName() &&
         user.unique_username.length > 0 &&
         user.email.length > 0 &&
         user.password.length > 0
      );
   }

   return (
      <React.Fragment>
         <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
               placeholder="Albert Einstein"
               name="username"
               onChange={handleChange}
               onSelect={() => setShowAlert(true)}
               isInvalid={!isValidName() && showAlert}
               errorBorderColor="#dd4d31"
            />
         </FormControl>
         {!isValidName() && showAlert && (
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
         )}
         <FormControl mt="24px">
            <FormLabel>Unique Username</FormLabel>
            <InputGroup>
               <InputLeftElement pointerEvents="none" color="var(--color-gray-4)">
                  @
               </InputLeftElement>
               <Input name="unique_username" onChange={handleChange} placeholder="albert" />
            </InputGroup>
         </FormControl>
         <FormControl mt="24px">
            <FormLabel>Email</FormLabel>
            <Input name="email" onChange={handleChange} placeholder="albert@domain.com" />
            <FormHelperText fontSize="14px" color="var(--color-gray-5)">
               {"We'll use your email to send you updates on your community contributions."}
            </FormHelperText>
         </FormControl>
         <FormControl mt="24px">
            <FormLabel>Password</FormLabel>
            <PasswordInput handleChange={handleChange as ChangeEventHandler<HTMLInputElement>} />
         </FormControl>
         <Button
            mt="32px"
            bgColor="var(--color-blue)"
            color="white"
            disabled={!allowSubmit()}
            _hover={{ bgColor: 'var(--color-blue)' }}
            _active={{ bgColor: 'var(--color-blue)' }}
            onClick={register}
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
