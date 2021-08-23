import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalCloseButton,
   Stack,
   StackDivider,
   ModalFooter,
   Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import Networks from './networks';
import { ResetHeader, ResetForm } from './reset';
import { LoginHeader, LoginForm } from './login';
import { RegisterHeader, RegisterForm } from './register';

function getProperHeader(
   resetMode: boolean,
   registerMode: boolean,
   toggleReset: () => void,
   toggleRegister: () => void
) {
   if (resetMode) {
      return <ResetHeader toggle={toggleReset} />;
   }
   if (registerMode) {
      return <RegisterHeader toggle={toggleRegister} />;
   }
   return <LoginHeader toggleRegister={toggleRegister} />;
}

function getProperForm(resetMode: boolean, registerMode: boolean, toggleReset: () => void) {
   if (resetMode) {
      return <ResetForm />;
   }
   if (registerMode) {
      return <RegisterForm />;
   }
   return <LoginForm toggleReset={toggleReset} />;
}

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const [resetMode, setResetMode] = useState(false);
   const [registerMode, setRegisterMode] = useState(false);
   const toggleReset = () => setResetMode(!resetMode);
   const toggleRegister = () => setRegisterMode(!registerMode);

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent overflow="hidden" w={{ base: '90%', md: '700px' }}>
            <ModalHeader>
               {getProperHeader(resetMode, registerMode, toggleReset, toggleRegister)}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody bgColor="var(--color-gray-1)" padding='0 8px'>
               <Stack
                  divider={
                     <StackDivider
                        borderColor="var(--color-gray-2)"
                        display={{ base: 'none', md: 'unset' }}
                     />
                  }
                  direction={{ base: 'column', md: 'row' }}
                  height={{ base: '620px', md: '360px' }}
               >
                  <Box mt="30px" padding="0 36px" minWidth="50%">
                     {getProperForm(resetMode, registerMode, toggleReset)}
                  </Box>
                  <Networks />
               </Stack>
            </ModalBody>
            <ModalFooter padding="0" bgColor="var(--color-gray-1)" />
         </ModalContent>
      </Modal>
   );
}
