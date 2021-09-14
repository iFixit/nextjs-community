import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
} from '@chakra-ui/accordion';
import { Box } from '@chakra-ui/layout';
import { getFooterCategories, listCategory } from './links';
import Menus from './menus';
import NewsletterSignup from './newsletter';

export default function MobileView() {
   const categories = getFooterCategories();

   return (
      <Box display={{ base: 'unset', sm: 'none' }}>
         <Accordion allowToggle borderColor="trueGray.700" mb="18px">
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
            <AccordionItem>
               <AccordionButton height="48px">
                  <Box flex="1" textAlign="left" fontWeight="bold">
                     Newsletter
                  </Box>
                  <AccordionIcon />
               </AccordionButton>
               <AccordionPanel>
                  <NewsletterSignup />
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
         <Menus />
      </Box>
   );
}
