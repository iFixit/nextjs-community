import {
   Heading,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalCloseButton,
   Box,
   Stack,
   StackDivider,
} from '@chakra-ui/react';
import { useState } from 'react';
import Networks from './networks';

function getProperForm(resetMode: boolean, registerMode: boolean) {
   if (resetMode) {
      return <ResetForm />;
   }
   if (registerMode) {
      return <RegisterForm />;
   }
   return <LoginForm />;
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
                  {getProperForm(resetMode, registerMode)}
                  <Networks />
               </Stack>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
}
