import { SimpleGrid, Divider, Stack, Menu, MenuList } from '@chakra-ui/react';
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
import DesktopView from './desktopView';
import MobileView from './mobileView';

export default function FooterComponent() {
   return (
      <Footer bgColor="var(--color-black)">
         <DesktopView />
         <MobileView />
         <Divider borderColor="trueGray.700" />
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
                           <FlagIcon storecode="US" />
                        </StoreFlagBackdrop>
                     }
                  >
                     Region
                  </StoreMenuButton>
                  <MenuList>
                     {stores.map(store => {
                        return (
                           <StoreMenuItem key={store.storeCode} as="a" href={store.url}>
                              <FlagIcon storecode={store.storeCode.toUpperCase()} />
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
               <FooterLink href={links.LICENSING}>Licensed under creative commons</FooterLink>
               <Divider
                  opacity={{
                     base: 1,
                     sm: 1,
                  }}
                  orientation="vertical"
                  borderColor="trueGray.700"
               />
               <FooterLink href={links.PRIVACY}>Privacy</FooterLink>
               <Divider
                  opacity={{
                     base: 1,
                     sm: 1,
                  }}
                  orientation="vertical"
                  borderColor="trueGray.700"
               />
               <FooterLink href={links.TERMS_OF_USE}>Legal</FooterLink>
            </Stack>
         </SimpleGrid>
      </Footer>
   );
}
