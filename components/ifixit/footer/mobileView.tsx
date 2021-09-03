import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
} from '@chakra-ui/accordion';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { IfixitLinks, ResourcesLinks, SocialLinks } from './links';

export default function MobileView() {
   return (
      <Accordion allowToggle display={{ base: 'unset', md: 'none' }}>
         <AccordionItem border="none">
            <AccordionButton>
               <Box flex="1" textAlign="left">
                  iFixit
               </Box>
               <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
               <IfixitLinks />
            </AccordionPanel>
         </AccordionItem>
         <AccordionItem>
            <AccordionButton>
               <Box flex="1" textAlign="left">
                  Resources
               </Box>
               <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
               <ResourcesLinks />
            </AccordionPanel>
         </AccordionItem>
         <AccordionItem>
            <AccordionButton>
               <Box flex="1" textAlign="left">
                  Social
               </Box>
               <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
               <SocialLinks />
            </AccordionPanel>
         </AccordionItem>
      </Accordion>
   );
}
