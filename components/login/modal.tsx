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
import { ResetHeader, ResetForm } from './reset';
import { LoginHeader, LoginForm } from './login';

function getProperHeader(
   resetMode: boolean,
   registerMode: boolean,
   toggleReset: () => void,
   toggleRegister: () => void
) {
   if (resetMode) {
      return <ResetHeader toggle={toggleReset} />;
   }
   // if (registerMode) {
   //    return <RegisterForm toggle={toggleRegister} />;
   // }
   return <LoginHeader toggleRegister={toggleRegister} />;
}

function getProperForm(resetMode: boolean, registerMode: boolean, toggleReset: () => void,) {
   if (resetMode) {
      return <ResetForm />;
   }
   // if (registerMode) {
   //    return <RegisterForm />;
   // }
   return <LoginForm toggleReset={toggleReset}/>;
}

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const [resetMode, setResetMode] = useState(false);
   const [registerMode, setRegisterMode] = useState(false);
   const toggleReset = () => setResetMode(!resetMode);
   const toggleRegister = () => setRegisterMode(!registerMode);

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>
               {getProperHeader(resetMode, registerMode, toggleReset, toggleRegister)}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody bgColor="var(--color-gray-1)">
               <Stack divider={<StackDivider borderColor="gray" />} direction="row">
                  {getProperForm(resetMode, registerMode, toggleReset)}
                  <Networks />
               </Stack>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
}
