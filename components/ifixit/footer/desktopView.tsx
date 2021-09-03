import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { IfixitLinks, ResourcesLinks, SocialLinks, PartnerLinks } from './links';

export default function DesktopView() {
   return (
      <SimpleGrid
         columns={{
            base: 1,
            sm: 3,
            lg: 4,
         }}
         spacing="4"
         p="48px 0"
         autoFlow="row"
         maxW="1000px"
         margin={{ base: '0 5%', xl: '0 auto' }}
         display={{ base: 'none', sm: 'grid' }}
      >
         <IfixitLinks />
         <ResourcesLinks />
         <SocialLinks />
         <PartnerLinks />
      </SimpleGrid>
   );
}
