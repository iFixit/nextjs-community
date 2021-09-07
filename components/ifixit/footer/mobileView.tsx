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
      <Accordion allowToggle display={{ base: 'unset', sm: 'none' }} borderColor="trueGray.700">
         <AccordionItem>
            <AccordionButton height="48px">
               <Box flex="1" textAlign="left" fontWeight="bold">
                  iFixit
               </Box>
               <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
               <IfixitLinks />
            </AccordionPanel>
         </AccordionItem>
         <AccordionItem>
            <AccordionButton height="48px">
               <Box flex="1" textAlign="left" fontWeight="bold">
                  Resources
               </Box>
               <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
               <ResourcesLinks />
            </AccordionPanel>
         </AccordionItem>
         <AccordionItem>
            <AccordionButton height="48px">
               <Box flex="1" textAlign="left" fontWeight="bold">
                  Social
               </Box>
               <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
               <SocialLinks />
            </AccordionPanel>
         </AccordionItem>
      </Accordion>
   );
}
