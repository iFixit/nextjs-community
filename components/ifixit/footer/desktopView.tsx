import { Heading, Img, SimpleGrid, Box, Stack } from '@chakra-ui/react';
import { FooterMenuList, FooterMenuItem, FooterPartnerLink } from '@ifixit/react-components';
import React from 'react';
import { getFooterCategories, listCategory } from './links';
import Menus from './menus';
import NewsletterSignup from './newsletter';
import partners from './partners';

export function Links() {
   const categories = getFooterCategories();

   return (
      <Stack
         direction={{ base: 'column', xl: 'row' }}
         mt="48px"
         spacing={{ base: '32px', xl: '14px' }}
      >
         <SimpleGrid
            columns={{
               base: 1,
               sm: 3,
            }}
            spacing="52px"
            flexGrow={{ base: 'unset', xl: 1 }}
         >
            {categories.map(category => (
               <FooterMenuList key={category.title} border="none" pb="0">
                  <FooterMenuItem mb="10px" display={{ base: 'none', sm: 'inherit' }}>
                     <Heading fontSize="14px" color="trueGray.100">
                        {category.title}
                     </Heading>
                  </FooterMenuItem>
                  {listCategory(category)}
               </FooterMenuList>
            ))}
         </SimpleGrid>
         <Partners />
      </Stack>
   );
}

function Partners() {
   return (
      <SimpleGrid
         columns={3}
         spacing="4"
         display="grid"
         w={{ base: '100%', xl: '350px' }}
         pb={{ base: '0', xl: '52px' }}
      >
         {partners.map(partner => {
            return (
               <FooterPartnerLink key={partner.name} pointerEvents="none" p="12px">
                  <Img
                     h="full"
                     mx="auto"
                     objectFit="contain"
                     src={partner.logo}
                     alt={partner.name}
                  />
               </FooterPartnerLink>
            );
         })}
      </SimpleGrid>
   );
}

export default function View() {
   return (
      <Box
         display={{ base: 'none', sm: 'unset' }}
         margin={{ base: '0 5%', xl: '0 auto' }}
         width={{ base: '90%', xl: '1000px' }}
      >
         <Links />
         <Stack
            direction={{ base: 'column-reverse', lg: 'row' }}
            justify="space-between"
            align={{ base: 'unset', lg: 'flex-end' }}
            spacing="18px"
            mt={{ base: '28px', xl: 0 }}
         >
            <Menus />
            <NewsletterSignup />
         </Stack>
      </Box>
   );
}
