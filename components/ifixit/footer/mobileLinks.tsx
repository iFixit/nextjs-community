import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
} from '@chakra-ui/accordion';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { getFooterCategories, listCategory } from './links';

export default function MobileView() {
   const categories = getFooterCategories();

   return (
      <Accordion allowToggle display={{ base: 'unset', sm: 'none' }} borderColor="trueGray.700">
         {categories.map(category => {
            return (
               <AccordionItem key={category.title}>
                  <AccordionButton height="48px">
                     <Box flex="1" textAlign="left" fontWeight="bold">
                        {category.title}
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>{listCategory(category)}</AccordionPanel>
               </AccordionItem>
            );
         })}
      </Accordion>
   );
}
