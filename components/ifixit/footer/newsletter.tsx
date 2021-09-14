import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Heading, Flex, Text } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import React from 'react';

export default function NewsletterSignup() {
   return (
      <Flex direction="column" justify="flex-end" mt={{base:'12px', xl: '0'}}>
         <Heading
            mb="10px"
            fontSize="14px"
            color="trueGray.100"
            display={{ base: 'none', sm: 'unset' }}
         >
            Newsletter
         </Heading>
         <Text m="0 0 8px" fontWeight="black" fontSize="14px" color="trueGray.400">
            Learn something new every month
         </Text>
         <HStack>
            <Input
               w={{ base: '100%', lg: '340px' }}
               color="black"
               variant="outline"
               placeholder="Your email"
            />
            <Button variant="invertOnHover">Subscribe</Button>
         </HStack>
      </Flex>
   );
}
