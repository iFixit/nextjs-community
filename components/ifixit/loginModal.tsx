import {
   Button,
   Heading,
   Flex,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalCloseButton,
   InputGroup,
   Input,
   InputRightElement,
   Box,
   Text,
   Stack,
   StackDivider,
} from '@chakra-ui/react';
import { useState } from 'react';



function LoginForm() {
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

function RegisterForm() {
   return <Box>Register</Box>;
}

function ResetForm() {
   return <Box>Reset</Box>;
}

function getProperForm(resetMode: boolean, registerMode: boolean) {
   let panel;
   if (resetMode) {
      panel = <ResetForm />;
   } else if (registerMode) {
      panel = <RegisterForm />;
   } else {
      panel = <LoginForm />;
   }
   return panel;
}

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const [resetMode, setResetMode] = useState(false);
   const [registerMode, setRegisterMode] = useState(false);
   const toggleForgot = () => setResetMode(!resetMode);
   const toggleRegister = () => setResetMode(!registerMode);
   const panel = getProperForm(resetMode, registerMode);

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader border="1px solid black">
               <Box textAlign="center">
                  <Heading>{resetMode ? 'Log In' : 'Reset Password'}</Heading>
               </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <Stack divider={<StackDivider borderColor="gray" />} direction="row">
                  <Box>
                     <Text>Email</Text>
                     <Input></Input>
                     <Flex justify="space-between">
                        <Text>Password</Text>
                        <Button>Forgot?</Button>
                     </Flex>
                     <PasswordInput></PasswordInput>
                  </Box>

               </Stack>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
}
