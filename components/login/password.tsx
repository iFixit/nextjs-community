import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function PasswordInput() {
   const [show, setShow] = useState(false);
   const handleClick = () => setShow(!show);

   return (
      <InputGroup size="md">
         <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            bgColor="white"
         />
         <InputRightElement mr="4px">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
               {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
         </InputRightElement>
      </InputGroup>
   );
}
