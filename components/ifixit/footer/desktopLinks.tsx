import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { FooterMenuList, FooterMenuItem } from '@ifixit/react-components';
import React from 'react';
import { Partners } from './links';
import { getFooterCategories, listCategory } from './links';

export default function DesktopLinks() {
   const categories = getFooterCategories();

   return (
      <Stack
         direction={{ base: 'column', lg: 'row' }}
         margin={{ base: '0 5%', xl: '0 auto' }}
         width={{ base: '90%', xl: '1000px' }}
      >
         <SimpleGrid
            columns={{
               base: 1,
               sm: 3,
            }}
            spacing="52px"
            p="48px 0"
            autoFlow="row"
            display={{ base: 'none', sm: 'grid' }}
            flexGrow={1}
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
