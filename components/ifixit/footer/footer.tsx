import { SimpleGrid, Divider, Stack, Menu, MenuList, HStack } from '@chakra-ui/react';
import {
   FlagIcon,
   Footer,
   FooterLink,
   Globe,
   StoreCurrency,
   StoreFlagBackdrop,
   StoreMenuButton,
   StoreMenuItem,
   StoreName,
} from '@ifixit/react-components';
import React from 'react';
import stores from './stores.json';
import links from '../../../lib/links';
import DesktopLinks from './desktopLinks';
import MobileLinks from './mobileLinks';
import { CountryCode } from '@ifixit/react-components';

export default function FooterComponent() {
   return (
      <Footer bgColor="var(--color-black)">
         <DesktopLinks />
         <MobileLinks />
         <Divider borderColor="trueGray.700" />
         <FooterBottom />
      </Footer>
   );
}

function FooterBottom() {
   return (
      <SimpleGrid
         columns={{
            base: 1,
            lg: 2,
         }}
         py="6"
         spacing={{
            base: 10,
         }}
         w={{ base: '90%', xl: '1000px' }}
         margin="0 auto"
      >
         <Stack
            direction={{
               base: 'row',
            }}
            spacing={{
               base: 2,
               sm: 12,
            }}
            justify={{
               base: 'space-between',
               sm: 'center',
               lg: 'flex-start',
            }}
         >
            <Menu>
               <StoreMenuButton
                  icon={
                     <StoreFlagBackdrop>
                        <FlagIcon code={CountryCode.US} />
                     </StoreFlagBackdrop>
                  }
               >
                  Region
               </StoreMenuButton>
               <MenuList>
                  {stores.map(store => {
                     return (
                        <StoreMenuItem key={store.storeCode} as="a" href={store.url}>
                           <FlagIcon code={store.storeCode.toUpperCase() as CountryCode} />
                           <StoreName>{store.name}</StoreName>
                           <StoreCurrency>{store.currency}</StoreCurrency>
                        </StoreMenuItem>
                     );
                  })}
               </MenuList>
            </Menu>
            <FooterLink href={links.TRANSLATE} icon={Globe}>
               Help translate
            </FooterLink>
         </Stack>
         <Stack
            align="center"
            justify={{
               base: 'flex-start',
               sm: 'center',
               lg: 'flex-end',
            }}
            direction={{
               base: 'column',
               sm: 'row',
            }}
            spacing={{
               base: 2,
               sm: 4,
            }}
         >
            <FooterLink color="trueGray.400" href={links.LICENSING}>
               Licensed under creative commons
            </FooterLink>
            <HStack
               spacing={{
                  base: 2,
                  sm: 4,
               }}
            >
               <FooterLink color="trueGray.400" href={links.PRIVACY}>
                  Privacy
               </FooterLink>
               <FooterLink color="trueGray.400" href={links.TERMS_OF_USE}>
                  Legal
               </FooterLink>
            </HStack>
         </Stack>
      </SimpleGrid>
   );
}
